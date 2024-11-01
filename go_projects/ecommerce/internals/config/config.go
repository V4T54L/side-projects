package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type config struct {
	ServerPort string
	SqlDbPath  string
}

var cfg *config = nil

func GetConfig() *config {
	if cfg == nil {
		if err := godotenv.Load(".env"); err != nil {
			log.Fatal("error loading .env : ", err)
		}

		cfg = &config{
			ServerPort: os.Getenv("SERVER_PORT"),
			SqlDbPath:  os.Getenv("SQLITE_PATH"),
		}
	}
	return cfg
}
