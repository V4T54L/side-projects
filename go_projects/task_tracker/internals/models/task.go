package models

import (
	"fmt"
	"time"
)

type Task struct {
	ID          int
	Description string
	Status      string
	CreatedAt   string
	DeletedAt   string
}

func NewTask(id int, desc string) Task {
	return Task{ID: id, Description: desc, Status: "pending", CreatedAt: time.Now().Local().String(), DeletedAt: ""}
}

func (t *Task) String() string {
	return fmt.Sprintf("(%s) Task %d : %s", t.Status, t.ID, t.Description)
}
