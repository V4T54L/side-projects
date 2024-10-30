package main

import (
	"context"
	"fmt"
	"htmx-blog/internals/config"
	"htmx-blog/internals/routes"
	"htmx-blog/internals/store"
	"log"
	"net/http"
	"os/signal"
	"syscall"
	"time"
)

func gracefulShutdown(server *http.Server, done chan bool) {
	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGTERM, syscall.SIGINT)
	defer stop()

	<-ctx.Done()

	log.Println("shutting down gracefully, press ctrl+c to force")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil && err == http.ErrServerClosed {
		log.Println("Server forced to shutdown with error : ", err)
	}

	log.Println("Server exiting")
	done <- true
}

func main() {
	blog := store.GetBlogStore().Blogs[0]
	fmt.Println("==> ", blog)
	server := http.Server{
		Addr:         ":" + config.GetConfig().ServerPort,
		Handler:      routes.RegisterRoutes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  time.Second * 10,
		WriteTimeout: time.Second * 20,
	}

	done := make(chan bool, 1)

	go gracefulShutdown(&server, done)

	log.Println("starting server on port : ", config.GetConfig().ServerPort)
	if err := server.ListenAndServe(); err != nil {
		log.Println("error staring the server : ", err)
	}

	<-done
	log.Println("Graceful shutdown complete")
}
