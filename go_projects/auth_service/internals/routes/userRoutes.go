package routes

import (
	"auth_service/internals/middlewares"
	"auth_service/internals/schemas"
	"auth_service/internals/store"
	"auth_service/internals/utils"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
)

type userService struct {
	store store.Store
}

func newUserService() *userService {
	return &userService{store: store.NewUserStore()}
}

func (u *userService) registerRoutes(r chi.Router) {
	r.Post("/login", u.loginHandler)
	r.Post("/signup", u.signupHandler)

	r.Group(func(sr chi.Router) {
		sr.Use(middlewares.AuthMiddleware)
		sr.Get("/me",u.getUserHandler)
	})
}

func (u *userService) loginHandler(w http.ResponseWriter, r *http.Request) {
	creds := schemas.UserRequest{}
	if err := json.NewDecoder(r.Body).Decode(&creds); err != nil {
		utils.ErrResponse(w, http.StatusBadRequest, err.Error())
		return
	}
	pass, err := utils.Decode(creds.EncodedPassword)
	if err != nil {
		utils.ErrResponse(w, http.StatusBadRequest, err.Error())
		return
	}
	dbUser := u.store.VerifyCreds(creds.Username, pass)
	if dbUser == nil {
		utils.ErrResponse(w, http.StatusBadRequest, "invalid credentials")
		return
	}

	authToken := schemas.AuthToken{ID: dbUser.ID, Username: dbUser.Username}
	token, err := utils.CreateJWT(&authToken)
	if err != nil {
		utils.ErrResponse(w, http.StatusInternalServerError, "error creating token : "+err.Error())
		return
	}

	utils.JSONResponse(w, http.StatusOK, map[string]string{
		"access_token": token,
	})
}

func (u *userService) signupHandler(w http.ResponseWriter, r *http.Request) {
	creds := schemas.UserRequest{}
	if err := json.NewDecoder(r.Body).Decode(&creds); err != nil {
		utils.ErrResponse(w, http.StatusBadRequest, err.Error())
		return
	}
	pass, err := utils.Decode(creds.EncodedPassword)
	if err != nil {
		utils.ErrResponse(w, http.StatusBadRequest, err.Error())
		return
	}
	hash, err := utils.Hash(pass)
	if err != nil {
		utils.ErrResponse(w, http.StatusBadRequest, err.Error())
		return
	}
	id, err := u.store.AddUser(creds.Username, hash)
	if err != nil {
		utils.ErrResponse(w, http.StatusBadRequest, err.Error())
		return
	}

	utils.MsgResponse(w, http.StatusCreated, fmt.Sprintf("user created with ID: %d", id))
}

func (u *userService) getUserHandler(w http.ResponseWriter, r *http.Request) {
	currentUser := r.Context().Value(schemas.CurrentUserCtxKey{}).(schemas.AuthToken)
	userData, exists := u.store.GetUserByUsername(currentUser.Username)
	if !exists {
		log.Fatalf("Unhandled case => User not found with username : %s", currentUser.Username)
	}
	utils.JSONResponse(w, http.StatusOK, userData)
}
