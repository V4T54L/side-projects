package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type confStruct struct {
	ServerPort string
	DBUri      string
}

var conf *confStruct = nil

func GetConfig() *confStruct {
	if conf == nil {
		if err := godotenv.Load(".env"); err != nil {
			log.Fatal("error loading .env : ", err)
		}
		config := confStruct{}
		config.ServerPort = os.Getenv("SERVER_PORT")
		config.DBUri = os.Getenv("DB_URI")

		conf = &config
	}
	return conf
}
