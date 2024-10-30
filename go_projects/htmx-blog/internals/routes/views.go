package routes

import (
	"htmx-blog/views"
	"net/http"

	"github.com/a-h/templ"
	"github.com/go-chi/chi/v5"
)

func viewsRoutes(r chi.Router) {
	r.Get("/", homeHandler)
	r.Get("/login", loginHandler)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	templ.Handler(views.HomePage()).ServeHTTP(w, r)
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	templ.Handler(views.LoginPage()).ServeHTTP(w, r)
}

// func blogById(w http.ResponseWriter, r *http.Request) {
// 	templ.Handler(views.()).ServeHTTP(w, r)
// }
