package routes

import (
	"dashboard-app/internal/database"
	"dashboard-app/internal/schema"
	"dashboard-app/internal/utils"
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/google/uuid"
)

type LocalMemRoutes struct {
	Store database.LocalMemStore
}

func registerLocalMemRoutes(r chi.Router) {
	localMemRoutes := LocalMemRoutes{Store: *database.NewLocalMemStore()}

	r.Get("/components", localMemRoutes.componentHandler)
	r.Post("/dashboard", localMemRoutes.createDashboardHandler)
	r.Get("/dashboard", localMemRoutes.getDashboardsHandler)
	r.Get("/dashboard/{id}", localMemRoutes.getDashboardByIDHandler)

}

func (s *LocalMemRoutes) componentHandler(w http.ResponseWriter, r *http.Request) {
	components := s.Store.GetComponents()
	utils.JsonResponse(w, http.StatusOK, components)
}

func (s *LocalMemRoutes) createDashboardHandler(w http.ResponseWriter, r *http.Request) {
	dashboard := schema.Dashboard{}
	if err := json.NewDecoder(r.Body).Decode(&dashboard); err != nil {
		utils.ErrResponse(w, http.StatusBadRequest, err.Error())
		return
	}
	for i := range dashboard.Charts {
		dashboard.Charts[i].ID = uuid.New().String()
	}
	id := s.Store.CreateDashboard(dashboard)
	utils.MsgResponse(w, http.StatusOK, "dashboard created with id : "+id)
}

func (s *LocalMemRoutes) getDashboardsHandler(w http.ResponseWriter, r *http.Request) {
	// query := r.URL.Query()

	// TODO : add pagination
	dashboards := s.Store.GetDashboards(0, 100)
	utils.JsonResponse(w, http.StatusOK, dashboards)
}

func (s *LocalMemRoutes) getDashboardByIDHandler(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	dashboard := s.Store.GetDashboardById(id)
	if dashboard == nil {
		utils.ErrResponse(w, http.StatusBadRequest, "no dashboard found with id="+id)
		return
	}
	utils.JsonResponse(w, http.StatusOK, dashboard)
}
