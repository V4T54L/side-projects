package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type config struct {
	ServerPort string
}

var cfg *config = nil

func GetConfig() *config {
	if cfg == nil {
		if err := godotenv.Load(".env"); err != nil {
			log.Fatal("error loading .env")
		}
		serverPort := os.Getenv("SERVER_PORT")
		cfg = &config{ServerPort: serverPort}
	}
	return cfg
}
