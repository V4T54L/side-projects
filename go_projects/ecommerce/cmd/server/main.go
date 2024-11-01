package main

import (
	"context"
	"ecommerce_be/internals/config"
	"ecommerce_be/internals/routes"
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

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		log.Println("server forced to close with error : ", err)
	}
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

	log.Println("starting server on port: ", config.GetConfig().ServerPort)
	if err := server.ListenAndServe(); err != nil {
		log.Println("error starting the server")
	}
	<-done
	log.Println("server closed gracefully")
}
