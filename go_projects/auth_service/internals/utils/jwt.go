package utils

import (
	"auth_service/internals/config"
	"auth_service/internals/schemas"
	"encoding/json"
	"errors"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

func CreateJWT(obj *schemas.AuthToken) (string, error) {
	data, err := json.Marshal(obj)
	if err != nil {
		return "", err
	}
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": string(data),
		"iss": "auth-service",
		"exp": time.Now().Add(time.Hour).Unix(),
		"iat": time.Now().Unix(),
	})
	tokenStr, err := claims.SignedString([]byte(config.GetConfig().JWTSecret))
	return tokenStr, err
}

func ParseJWT(tokenStr string) (*schemas.AuthToken, error) {
	token, err := jwt.Parse(tokenStr, func(t *jwt.Token) (interface{}, error) {
		return []byte(config.GetConfig().JWTSecret), nil
	})
	if err != nil {
		return nil, err
	}
	if !token.Valid {
		return nil, errors.New("invalid token")
	}

	sub, err := token.Claims.GetSubject()
	if err != nil {
		return nil, err
	}
	authToken := schemas.AuthToken{}
	err = json.Unmarshal([]byte(sub), &authToken)
	if err != nil {
		return nil, err
	}
	return &authToken, nil
}
