package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
	jsondb "task-tracker-cli/internals/json_db"
)

func main() {
	args := os.Args[1:]
	arg_len := len(args)
	if arg_len == 0 {
		printHelpMessage()
		return
	}

	db := jsondb.NewJsonDB("./db/task_tracker.json")

	switch args[0] {
	case "list":
		filterStatus := ""
		if arg_len == 2 {
			filterStatus = args[1]
		}
		db.PrintTasks(filterStatus)

	case "create":
		if arg_len < 2 {
			printHelpMessage()
			return
		}
		if err := db.AddTask(args[1]); err != nil {
			log.Fatal(err)
		}

	case "update":
		if arg_len < 3 {
			printHelpMessage()
			return
		}
		id, err := strconv.Atoi(args[1])
		if err != nil {
			log.Fatal(err)
		}
		if err = db.UpdateTaskDescription(id, args[2]); err != nil {
			log.Fatal(err)
		}
	case "toggle":
		if arg_len < 2 {
			printHelpMessage()
			return
		}
		id, err := strconv.Atoi(args[1])
		if err != nil {
			log.Fatal(err)
		}
		if err = db.ToggleStatus(id); err != nil {
			log.Fatal(err)
		}
	case "delete":
		if arg_len < 2 {
			printHelpMessage()
			return
		}
		id, err := strconv.Atoi(args[1])
		if err != nil {
			log.Fatal(err)
		}
		if err = db.DeleteTask(id); err != nil {
			log.Fatal(err)
		}
	}
}

func printHelpMessage() {
	fmt.Println(`
	Task tracker CLI is a tool for managing tasks.

	Usage:
		task_tracker <command> [arguments]
	
	The commands are:
		list			list all tasks, [optional] args: status
		create			create a new task, args: description
		update			update task by id, args: id, new_description
		toggle			toggle status of task by id, args: id
		delete			delete a task by id, args: id
	`)
}
