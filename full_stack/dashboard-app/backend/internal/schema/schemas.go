package schema

import (
	"github.com/google/uuid"
)

type ComponentDetail struct {
	// Name   string `db:"name"`
	// Fields string `db:"fields"`
	Name   string            `json:"name"`
	Detail map[string]string `json:"fields"`
}

type Component struct {
	ID      uuid.UUID   `json:"id"`
	Name    string      `json:"name"`
	Fields  interface{} `json:"fields"`
	Example interface{} `json:"example"`
}

type Chart struct {
	ID          string                   `json:"id"`
	ComponentID string                   `json:"component_id"`
	Name        string                   `json:"name"`
	Data        []map[string]interface{} `json:"data"`
}

type Dashboard struct {
	ID     string  `json:"id"`
	Name   string  `json:"name"`
	Charts []Chart `json:"charts"`
}
