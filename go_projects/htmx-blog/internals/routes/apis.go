package routes

import (
	"htmx-blog/internals/store"
	"htmx-blog/views"
	"log"
	"net/http"

	"github.com/a-h/templ"
	"github.com/go-chi/chi/v5"
)

func apiRoutes(r chi.Router) {
	r.Post("/login", apiLogin)
	r.Get("/blogs", apiGetBlogs)
	r.Get("/blogs/{id}", apiGetBlogByID)
	r.Get("/search", apiSearch)
}

func apiLogin(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	user := r.Form.Get("username")
	pass := r.Form.Get("password")

	if user == pass {
		// w.Header().Add("Authorization", "Bearer "+user)
		w.Header().Add("HX-Redirect", "/")
		return
	}

	_, _ = w.Write([]byte("<div>invalid credentials (hint: username should match password)</div>"))
}

func apiGetBlogs(w http.ResponseWriter, r *http.Request) {
	templ.Handler(views.APIBlogList(store.GetBlogStore().Blogs)).ServeHTTP(w, r)
}

func apiGetBlogByID(w http.ResponseWriter, r *http.Request) {
	// id := chi.URLParam(r, "id")
	templ.Handler(views.ApiBlogContent(store.GetBlogStore().Blogs[0])).ServeHTTP(w, r)
}

func apiSearch(w http.ResponseWriter, r *http.Request) {
	log.Println("Input changed : ", r.URL.Query().Get("search"))
}
