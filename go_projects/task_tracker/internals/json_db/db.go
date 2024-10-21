package jsondb

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"task-tracker-cli/internals/models"
)

type db struct {
	Db_uri string `json:"-"`
	Buffer []models.Task
	LastID int
}

func NewJsonDB(db_path string) *db {
	loaded, err := Load(db_path)
	if err != nil {
		log.Println("error loading the db, initializing new one : ", err)
		new_db := &db{Db_uri: db_path, Buffer: make([]models.Task, 0), LastID: 0}
		return new_db
	}
	return loaded
}

func Load(db_uri string) (*db, error) {
	byte_data, err := os.ReadFile(db_uri)
	if err != nil {
		return nil, fmt.Errorf("error opening the db file : %s", err)
	}

	data := db{}
	err = json.Unmarshal(byte_data, &data)
	if err != nil {
		return nil, fmt.Errorf("error unmarshaling buffer : %s", err)
	}
	data.Db_uri = db_uri

	return &data, nil
}

func (d *db) save() error {
	byte_data, err := json.Marshal(d)
	if err != nil {
		return fmt.Errorf("error marshaling db : %s", err)
	}

	err = os.WriteFile(d.Db_uri, byte_data, os.ModeAppend)
	if err != nil {
		return fmt.Errorf("error saving data to the file : %s", err)
	}
	return nil
}
