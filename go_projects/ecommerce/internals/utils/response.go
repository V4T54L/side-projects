package utils

import (
	"encoding/json"
	"log"
	"net/http"
)

func JSONResponse(w http.ResponseWriter, statusCode int, obj any) {
	data, err := json.Marshal(obj)
	if err != nil {
		ErrResponse(w, http.StatusInternalServerError, "error masrshaling response  : "+err.Error())
		return
	}

	w.WriteHeader(statusCode)
	_, err = w.Write(data)
	if err != nil {
		log.Fatal("error writing to response : ", err)
	}
}

func ErrResponse(w http.ResponseWriter, statusCode int, err string) {
	// ! JSON Error handling might cause infinite loop!!
	MsgResponse(w, statusCode, err)
}

func MsgResponse(w http.ResponseWriter, statusCode int, msg string) {
	w.WriteHeader(statusCode)
	_, err := w.Write([]byte(msg))
	if err != nil {
		log.Fatal("error writing to response : ", err)
	}
}
