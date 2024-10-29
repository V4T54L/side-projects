package utils

import (
	"log"

	"golang.org/x/crypto/bcrypt"
)

func Decode(encoded string) (string, error) {
	// fake decode
	return encoded, nil
}

func Hash(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func CompareHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	log.Println("Comparing hash => err : ", err)
	return err == nil
}
