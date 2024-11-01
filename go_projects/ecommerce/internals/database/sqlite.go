package database

import (
	"context"
	"log"
	"time"

	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
)

type Store struct {
	dbx *sqlx.DB
}

func NewSqliteStore() *Store {
	db, err := sqlx.Open("sqlite3", "./db.sqlite")
	if err != nil {
		log.Fatal("error opening the db : ", err)
	}
	err = db.Ping()
	if err != nil {
		log.Fatal("error connnecting to the db : ", err)
	}
	return &Store{
		dbx: db,
	}
}

func (s *Store) Exec(query string) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_ = s.dbx.MustExecContext(ctx, query)
}

func (s *Store) Close() error {
	return s.dbx.Close()
}
