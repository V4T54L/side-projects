package models

import (
	"expense_tracker/internals/constants"
	"fmt"
	"time"
)

type Expense struct {
	ID          int
	Amount      float32
	Description string
	CreatedAt   time.Time
	DeletedAt   *time.Time
}

func NewExpense(id int, amount float32, description string) Expense {
	return Expense{ID: id, Amount: amount, Description: description, CreatedAt: time.Now(), DeletedAt: nil}
}

// func (e *Expense) String() string {
// 	return fmt.Sprintf("Expense #%d => Amt: %f \t Created_on: %s \n Description:%s", e.ID, e.Amount, e.CreatedAt.Format(constants.DATE_FMT), e.Description)
// }

func (e *Expense) CsvValString() string {
	return fmt.Sprintf("%d \t %.2f \t %s \t %s", e.ID, e.Amount, e.CreatedAt.Format(constants.DATE_FMT), e.Description)
}

func Header() string {
	return "ID \t Amount \t CreatedAt \t Description"
}
