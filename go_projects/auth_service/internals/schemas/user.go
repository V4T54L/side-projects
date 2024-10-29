package schemas

type User struct {
	ID             int    `json:"id"`
	Username       string `json:"username"`
	HashedPassword string `json:"-"`
}

type UserRequest struct {
	Username        string `json:"username"`
	EncodedPassword string `json:"encoded_password"`
}

type AuthToken struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
}

type CurrentUserCtxKey struct{}
