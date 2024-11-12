package database

// import (
// 	"dashboard-app/internal/config"
// 	"dashboard-app/internal/schema"
// 	"database/sql"
// 	"encoding/json"
// 	"log"

// 	_ "github.com/mattn/go-sqlite3"
// )

// var dbConn *sql.DB = nil

// func InitDB() error {
// 	db, err := sql.Open("sqlite3", config.GetConfig().DBUri)
// 	if err != nil {
// 		return err
// 	}

// 	if err := db.Ping(); err != nil {
// 		return err
// 	}
// 	dbConn = db

// 	_, err = db.Exec(init_query)
// 	if err != nil {
// 		return err
// 	}

// 	// _, err = db.Exec(seed_components)
// 	// if err != nil {
// 	// 	return err
// 	// }

// 	log.Println("database initialized")

// 	return nil
// }

// func GetComponentDetails() ([]schema.ComponentDetail, error) {
// 	rows, err := dbConn.Query("SELECT required_fields FROM chart_components")
// 	if err != nil {
// 		return nil, err
// 	}
// 	defer rows.Close()

// 	var res []schema.ComponentDetail
// 	for rows.Next() {
// 		var componentDetail string
// 		if err = rows.Scan(&componentDetail); err != nil {
// 			return nil, err
// 		}

// 		var data schema.ComponentDetail
// 		if err = json.Unmarshal([]byte(componentDetail), &data); err != nil {
// 			return nil, err
// 		}
// 		res = append(res, data)
// 	}

// 	return res, nil
// }
