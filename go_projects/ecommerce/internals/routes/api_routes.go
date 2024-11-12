package routes

import (
	"ecommerce_be/internals/database"
	"ecommerce_be/internals/schemas"
	"ecommerce_be/internals/utils"
	"encoding/json"
	"fmt"
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
	r.Post("/auth/register", s.register)
	r.Post("/auth/login", s.login)

}

func (s *Service) register(w http.ResponseWriter, r *http.Request) {
	user := schemas.UserSignup{}
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		utils.ErrResponse(
			w, http.StatusBadRequest,
			"error parsing the body : "+err.Error(),
		)
		return
	}

	// decode password
	// hash password

	// add user to db returning ID
	user_id := 1

	utils.MsgResponse(w, http.StatusCreated, fmt.Sprintf("user created successully with ID : %d", user_id))
}

func (s *Service) login(w http.ResponseWriter, r *http.Request) {
	user := schemas.UserLogin{}
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		utils.ErrResponse(
			w, http.StatusBadRequest,
			"error parsing the body : "+err.Error(),
		)
		return
	}

	// decode password
	// hash password

	// compare creds from db returning info
	user_info := struct{}{}

	// generate token from user_info
	token := fmt.Sprintf("tokenStr %v", user_info)

	utils.JSONResponse(w, http.StatusCreated, schemas.LoginResponse{Token: token})
}

func (s *Service) getUsers(w http.ResponseWriter, r *http.Request) {
	// fetch paginated Users from db
}
