package routes

import (
	"ecommerce_be/internals/database"
	"net/http"

	"github.com/go-chi/chi/v5"
)

type Service struct {
	store *database.Store
}

func NewService() *Service {
	return &Service{store: database.NewSqliteStore()}
}

func (s *Service) addServiceRoutes(r chi.Router) {
	r.Post("/signup", s.signup)
}

func (s *Service) signup(w http.ResponseWriter, r *http.Request) {}
