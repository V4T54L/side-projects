package store

import "errors"

var (
	errUserConflict = errors.New("user  with provided username already exists")
)
