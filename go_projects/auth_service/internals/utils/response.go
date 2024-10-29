package utils

import (
	"encoding/json"
	"log"
	"net/http"
)

func JSONResponse(w http.ResponseWriter, statusCode int, obj any) {
	data, err := json.Marshal(obj)
	if err != nil {
		log.Fatal("Json Marshal error : ", err)
	}

	w.WriteHeader(statusCode)
	_, _ = w.Write(data)
}

func MsgResponse(w http.ResponseWriter, statusCode int, msg string) {
	obj := map[string]string{
		"message": msg,
	}

	JSONResponse(w, statusCode, obj)
}

func ErrResponse(w http.ResponseWriter, statusCode int, err string) {
	obj := map[string]string{
		"error": err,
	}

	JSONResponse(w, statusCode, obj)
}
