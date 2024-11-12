package routes

import (
	"dashboard-app/internal/utils"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

func RegisterRoutes() http.Handler {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(cors.Handler(cors.Options{
		// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
		AllowedOrigins: []string{"*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	r.Get("/api/v1/health", healthHandler)
	// r.Get("/api/v1/components", componentHandler)

	r.Route("/api/v1/", registerLocalMemRoutes)

	return r
}

func healthHandler(w http.ResponseWriter, _ *http.Request) {
	utils.MsgResponse(w, http.StatusOK, "healthy")
}

// func componentHandler(w http.ResponseWriter, _ *http.Request) {
// 	componentDetails, err := database.GetComponentDetails()
// 	if err != nil {
// 		utils.ErrResponse(w, http.StatusInternalServerError, err.Error())
// 		return
// 	}
// 	utils.JsonResponse(w, http.StatusOK, componentDetails)
// }
