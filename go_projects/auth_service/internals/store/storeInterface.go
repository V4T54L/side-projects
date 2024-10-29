package store

import "auth_service/internals/schemas"

type Store interface {
	GetUserByUsername(username string) (*schemas.User, bool)
	VerifyCreds(username, password string) *schemas.User
	AddUser(username, hashedPassword string) (int, error)
}
