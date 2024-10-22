package utils

import (
	"encoding/csv"
	"expense_tracker/internals/constants"
	"expense_tracker/internals/models"
	"fmt"
	"os"
	"strconv"
	"time"
)

func ImportFromCsv(csvPath string) ([]models.Expense, error) {
	file, err := os.Open(csvPath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	reader := csv.NewReader(file)
	records, err := reader.ReadAll()
	if err != nil {
		return nil, err
	}

	var expenses []models.Expense
	for i, record := range records {
		if i == 0 {
			continue
		}

		id, err := strconv.Atoi(record[0])
		if err != nil {
			fmt.Println("Error converting string to int:", err)
			return nil, err
		}

		amount, err := strconv.ParseFloat(record[2], 32)
		if err != nil {
			fmt.Println("Error converting string to float:", err)
			return nil, err
		}

		createdAt, err := time.Parse(time.RFC3339, record[3])
		if err != nil {
			return nil, err
		}

		var deletedAt *time.Time = nil
		if record[4] != "" {
			parsedTime, err := time.Parse(time.RFC3339, record[3])
			if err != nil {
				return nil, err
			}
			deletedAt = &parsedTime
		}

		expense := models.Expense{
			ID:          id,
			Description: record[1],
			Amount:      float32(amount),
			CreatedAt:   createdAt,
			DeletedAt:   deletedAt,
		}
		expenses = append(expenses, expense)
	}

	return expenses, nil

}

func ExportToCsv(arr []models.Expense, csvPath string) error {
	file, err := os.Create(csvPath)
	if err != nil {
		return err
	}
	defer file.Close()

	writer := csv.NewWriter(file)
	defer writer.Flush()

	err = writer.Write([]string{"ID", "Description", "Amount", "CreatedAt", "DeletedAt"})
	if err != nil {
		return err
	}

	// Write data
	for _, expense := range arr {
		deletedAtStr := ""
		if expense.DeletedAt != nil {
			deletedAtStr = expense.DeletedAt.Format(constants.DATE_FMT)
		}
		row := []string{fmt.Sprintf("%d", expense.ID), expense.Description, fmt.Sprintf("%.2f", expense.Amount), expense.CreatedAt.Format(time.RFC3339), deletedAtStr}
		if err := writer.Write(row); err != nil {
			return err
		}
		fmt.Println(row)
	}

	return nil
}
