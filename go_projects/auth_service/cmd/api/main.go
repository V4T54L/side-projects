package main

import (
	"auth_service/internals/config"
	"auth_service/internals/routes"
	"context"
	"fmt"
	"log"
	"net/http"
	"os/signal"
	"syscall"
	"time"
)

func gracefulShutdown(apiServer *http.Server, done chan bool) {
	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	<-ctx.Done()

	log.Println("shutting down gracefully, press CTRL+C to force")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := apiServer.Shutdown(ctx); err != nil {
		log.Fatal("Server forced to shutdown with error : ", err)
	}

	log.Println("Server exiting")

	done <- true

}

func main() {
	server := http.Server{
		Addr:         ":" + config.GetConfig().ServerPort,
		Handler:      routes.RegisterRoutes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 20 * time.Second,
	}

	done := make(chan bool, 1)
	go gracefulShutdown(&server, done)

	log.Println("starting server on port : ", config.GetConfig().ServerPort)
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		panic(fmt.Sprintf("http server error: %s", err))
	}

	// Wait for the graceful shutdown to complete
	<-done
	log.Println("Graceful shutdown complete.")
}
