package jsondb

import (
	"errors"
	"fmt"
	"task-tracker-cli/internals/models"
	"time"
)

func (d *db) AddTask(name string) error {
	// d.rw.Lock()
	// defer d.rw.Unlock()

	newID := d.LastID + 1
	d.Buffer = append(d.Buffer, models.NewTask(newID, name))
	d.LastID = newID
	err := d.save()
	if err != nil {
		return err
	}
	return nil
}

func (d *db) SameAsNewDescription(id int, desc string) bool {
	return d.Buffer[id-1].Description == desc
}

func (d *db) UpdateTaskDescription(id int, desc string) error {
	if d.SameAsNewDescription(id, desc) {
		return errors.New("new description is the same as current description")
	}

	d.Buffer[id-1].Description = desc

	err := d.save()
	return err
}

func (d *db) ToggleStatus(id int) error {
	newStatus := ""
	if d.Buffer[id-1].Status == "pending" {
		newStatus = "done"
	} else {
		newStatus = "pending"
	}
	d.Buffer[id-1].Status = newStatus

	err := d.save()
	return err
}

func (d *db) DeleteTask(id int) error {
	d.Buffer[id-1].DeletedAt = time.Now().Local().String()

	err := d.save()
	return err
}

func (d *db) PrintTasks(filterStatus string) {
	for _, val := range d.Buffer {
		if val.DeletedAt != "" || (filterStatus != "" && val.Status != filterStatus) {
			continue
		}
		fmt.Println(val.String())
	}
}
