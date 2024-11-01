package main

import (
	"ecommerce_be/internals/database"
	"log"
	"os"
)

func main() {
	db := database.NewSqliteStore()
	defer func(db *database.Store) {
		if err := db.Close(); err != nil {
			log.Println("error closing the database : ", err)
		}
	}(db)

	migrateFile("./migrations/up/001_init_db.sql", db)
}

func migrateFile(path string, db *database.Store) {
	data, err := os.ReadFile(path)
	if err != nil {
		log.Fatal("error reading the file : ", err)
	}
	db.Exec(string(data))
}
