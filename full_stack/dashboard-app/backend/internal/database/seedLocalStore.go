package database

import (
	"dashboard-app/internal/schema"

	"github.com/google/uuid"
)

func SeedComponents() []schema.Component {
	return []schema.Component{
		{
			ID:   uuid.New(),
			Name: "area",
			Fields: map[string]string{
				"name": "string",
				"uv":   "int",
				"pv":   "int",
				"amt":  "int",
			},
			Example: []map[string]interface{}{
				{"name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400},
				{"name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210},
				{"name": "Page C", "uv": 2000, "pv": 9800, "amt": 2290},
				{"name": "Page D", "uv": 2780, "pv": 3908, "amt": 2000},
				{"name": "Page E", "uv": 1890, "pv": 4800, "amt": 2181},
			},
		},
		{
			ID:   uuid.New(),
			Name: "composed",
			Fields: map[string]string{
				"name": "string",
				"uv":   "int",
				"pv":   "int",
			},
			Example: []map[string]interface{}{
				{"name": "Page A", "uv": 4000, "pv": 2400},
				{"name": "Page B", "uv": 3000, "pv": 1398},
				{"name": "Page C", "uv": 2000, "pv": 9800},
				{"name": "Page D", "uv": 2780, "pv": 3908},
				{"name": "Page E", "uv": 1890, "pv": 4800},
			},
		},
		{
			ID:   uuid.New(),
			Name: "bar",
			Fields: map[string]string{
				"name":  "string",
				"value": "int",
			},
			Example: []map[string]interface{}{
				{"name": "Page A", "value": 2400},
				{"name": "Page B", "value": 1398},
				{"name": "Page C", "value": 9800},
				{"name": "Page D", "value": 3908},
				{"name": "Page E", "value": 4800},
			},
		},
		{
			ID:   uuid.New(),
			Name: "funnel",
			Fields: map[string]string{
				"name":  "string",
				"value": "int",
			},
			Example: []map[string]interface{}{
				{"name": "Page A", "value": 2400},
				{"name": "Page B", "value": 1398},
				{"name": "Page C", "value": 9800},
				{"name": "Page D", "value": 3908},
				{"name": "Page E", "value": 4800},
			},
		},
	}
}

func SeedDashboards(components []schema.Component) []schema.Dashboard {
	return []schema.Dashboard{
		{
			ID:   uuid.New().String(),
			Name: "Dashboard 1",
			Charts: []schema.Chart{
				dummyChartFromComponentID(components, 0),
				dummyChartFromComponentID(components, 0),
				dummyChartFromComponentID(components, 3),
				dummyChartFromComponentID(components, 1),
			},
		},
		{
			ID:   uuid.New().String(),
			Name: "Dashboard 2",
			Charts: []schema.Chart{
				dummyChartFromComponentID(components, 2),
				dummyChartFromComponentID(components, 0),
				dummyChartFromComponentID(components, 2),
				dummyChartFromComponentID(components, 3),
			},
		},
	}
}

func dummyChartFromComponentID(components []schema.Component, id int) schema.Chart {
	return schema.Chart{
		ID:          uuid.New().String(),
		ComponentID: components[id].ID.String(),
		Name:        uuid.NewString()[:6],
		Data:        components[id].Example.([]map[string]interface{}),
	}
}
