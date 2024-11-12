package utils

import (
	"encoding/json"
	"log"
	"net/http"
)

func JsonResponse(w http.ResponseWriter, statusCode int, obj any) {
	data, err := json.Marshal(obj)
	if err != nil {
		log.Println("error marshaling an object : ", err)
	}

	w.WriteHeader(statusCode)
	_, _ = w.Write(data)
}

func MsgResponse(w http.ResponseWriter, statusCode int, msg string) {
	obj := map[string]string{
		"message": msg,
	}
	JsonResponse(w, statusCode, obj)
}

func ErrResponse(w http.ResponseWriter, statusCode int, err string) {
	obj := map[string]string{
		"error": err,
	}
	JsonResponse(w, statusCode, obj)
}
