package middlewares

import (
	"auth_service/internals/schemas"
	"auth_service/internals/utils"
	"context"
	"net/http"
)

func AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		header := r.Header.Get("Authorization")
		if header == "" {
			utils.ErrResponse(rw, http.StatusUnauthorized, "token not found")
			return
		}

		token := header[len("Bearer "):]
		if token == "" {
			utils.ErrResponse(rw, http.StatusUnauthorized, "token not found")
			return
		}

		authToken, err := utils.ParseJWT(token)
		if err != nil {
			utils.ErrResponse(rw, http.StatusUnauthorized, err.Error())
			return
		}

		ctx := context.WithValue(r.Context(), schemas.CurrentUserCtxKey{}, authToken)
		next.ServeHTTP(rw, r.WithContext(ctx))
	})

}
