package database

import (
	"dashboard-app/internal/schema"

	"github.com/google/uuid"
)

type LocalMemStore struct {
	Components []schema.Component
	Dashboards []schema.Dashboard
}

func NewLocalMemStore() *LocalMemStore {
	components := SeedComponents()
	return &LocalMemStore{
		Components: components,
		Dashboards: SeedDashboards(components),
	}
}

func (s *LocalMemStore) GetComponents() []schema.Component {
	return s.Components
}

func (s *LocalMemStore) CreateDashboard(data schema.Dashboard) string {
	data.ID = uuid.New().String()
	s.Dashboards = append(s.Dashboards, data)
	return data.ID
}

func (s *LocalMemStore) GetDashboards(offset, limit int) []schema.Dashboard {
	if offset < 0 {
		offset = 0
	}
	limit += offset
	if limit > len(s.Dashboards) {
		limit = len(s.Dashboards)
	}
	return s.Dashboards[offset:limit]
}

func (s *LocalMemStore) GetDashboardById(dashboardID string) *schema.Dashboard {
	for _, v := range s.Dashboards {
		if dashboardID == v.ID {
			return &v
		}
	}
	return nil
}
