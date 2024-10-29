package store

import (
	"auth_service/internals/schemas"
	"auth_service/internals/utils"
)

type userStore struct {
	users map[string]schemas.User
}

func NewUserStore() *userStore {
	prePopulate := map[string]schemas.User{
		"ditto": {
			ID:             1,
			Username:       "ditto",
			HashedPassword: "$2a$14$JbZ/d/GzsM9QaRZnwy87CuWPcJnrRPV0NA2jdRDvzvEHoc5xgRf7q",
			// password = secret
		},
		"chad": {
			ID:             2,
			Username:       "chad",
			HashedPassword: "$2a$14$xuF.P9DtZrTCY8vXTqkKIeE3oZpuEqrgSTAo1zG4QXyNj5w0Pu2cy",
			// password = chad
		},
	}

	return &userStore{users: prePopulate}
}

func (s *userStore) GetUserByUsername(username string) (*schemas.User, bool) {
	user, ok := s.users[username]
	return &user, ok
}

func (s *userStore) VerifyCreds(username, password string) *schemas.User {
	user, ok := s.users[username]
	if !ok || !utils.CompareHash(password, user.HashedPassword) {
		return nil
	}
	return &user
}

func (s *userStore) AddUser(username, hashedPassword string) (int, error) {
	if _, ok := s.users[username]; ok {
		return 0, errUserConflict
	}
	u := schemas.User{
		ID:             len(s.users) + 1,
		Username:       username,
		HashedPassword: hashedPassword,
	}
	s.users[username] = u
	return u.ID, nil
}
