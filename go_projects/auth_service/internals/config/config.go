package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type config struct {
	ServerPort string
	JWTSecret  string
}

var cfg *config = nil

func GetConfig() *config {
	if cfg == nil {
		if err := godotenv.Load(".env"); err != nil {
			log.Fatal("error loading .env : ", err)
		}

		cfg = &config{
			ServerPort: os.Getenv("SERVER_PORT"),
			JWTSecret:  os.Getenv("JWT_SECRET"),
		}
	}
	return cfg
}
