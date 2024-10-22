package csvdb

import (
	"expense_tracker/internals/models"
	"expense_tracker/internals/utils"
	"log"
)

type db struct {
	uri    string
	buffer []models.Expense
}

func GetDB(uri string) *db {
	return &db{uri: uri, buffer: nil}
}

func (d *db) loadDB() {
	buffer, err := utils.ImportFromCsv(d.uri)
	if err != nil {
		log.Println("error importing from csv : ", err)
		buffer = make([]models.Expense, 0)
	}
	d.buffer = buffer
}

func (d *db) saveDB() {
	err := utils.ExportToCsv(d.buffer, d.uri)
	if err != nil {
		log.Fatal("error saving the db : ", err)
	}
}

func (d *db) validateID(id int) {
	if id <= 0 || id > len(d.buffer) {
		log.Fatal("invalid id provided : ", id)
	}
}
