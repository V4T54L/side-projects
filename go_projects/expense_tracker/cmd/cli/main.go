package main

import (
	csvdb "expense_tracker/internals/csv_db"
	"flag"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	args := os.Args[1:]

	cmd := flag.NewFlagSet("command", flag.ExitOnError)

	helpPtr := cmd.Bool("help", false, "show help message")
	descriptionPtr := cmd.String("description", "", "description for expense")
	amtPtr := cmd.Float64("amount", 0.00, "amount for expense")
	idPtr := cmd.Int("id", 0, "id for expense")

	cmd.Parse(args[1:])

	if len(args) == 0 || *helpPtr {
		printHelp()
		return
	}
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	db_uri := os.Getenv("CSV_PATH")
	if db_uri == "" {
		log.Fatal("env variable 'CSV_PATH' not found")
	}

	db := csvdb.GetDB(db_uri)
	switch args[0] {
	case "add":
		db.AddExpense(*descriptionPtr, float32(*amtPtr))
	case "list":
		db.ListExpenses()
	case "summary":
		db.ListSummary()
	case "update":
		db.UpdateExpense(*idPtr, *descriptionPtr, float32(*amtPtr))
	case "delete":
		db.DeleteExpense(*idPtr)
	default:
		printHelp()
	}
}

func printHelp() {
	fmt.Println(`
	Expense tracker is a CLI application to manage your finances.
	The application allows user to add, delete and view their expenses.
	The application also provides summary of the expenses.
	
	Usage:
		expense_tracker <command> [...args]
	
	Commands
		add			add an expense, flags: --description, --amount
		list		lists all the expenses, no args/flags required
		summary		provides total spendings, no args/flags required
		update		updates an expense by id,
					flags: --id, --description(optional), --amount(optional)
		delete		delete an expense by id
	`)
}
