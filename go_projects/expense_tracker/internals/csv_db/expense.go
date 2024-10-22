package csvdb

import (
	"expense_tracker/internals/models"
	"fmt"
	"time"
)

func (d *db) AddExpense(description string, amount float32) {
	d.loadDB()
	defer d.saveDB()

	newID := len(d.buffer) + 1
	d.buffer = append(d.buffer, models.NewExpense(newID, amount, description))
	fmt.Println("Expense created with id : ", newID)
}

func (d *db) UpdateExpense(id int, description string, amount float32) {
	d.loadDB()
	defer d.saveDB()
	d.validateID(id)

	id--
	if description != "" {
		d.buffer[id].Description = description
	}

	if amount != 0 {
		d.buffer[id].Amount = amount
	}
}

func (d *db) DeleteExpense(id int) {
	d.loadDB()
	defer d.saveDB()
	d.validateID(id)

	id--

	now := time.Now()

	d.buffer[id].DeletedAt = &now
}

func (d *db) ListExpenses() {
	d.loadDB()

	fmt.Println(models.Header())
	for _, e := range d.buffer {
		if e.DeletedAt != nil {
			continue
		}
		fmt.Println(e.CsvValString())
	}
}

func (d *db) ListSummary() {
	d.loadDB()

	price := float32(0)
	for _, e := range d.buffer {
		if e.DeletedAt != nil {
			continue
		}
		price += e.Amount
	}
	fmt.Printf("Total expenses : %.2f\n", price)
}
