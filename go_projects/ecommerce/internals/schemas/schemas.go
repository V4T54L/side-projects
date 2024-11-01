package schemas

type UserSignup struct {
	Username        string `json:"username"`
	EncodedPassword string `json:"encoded_password"`
	Name            string `json:"name"`
	Email           string `json:"email"`
}

type UserLogin struct {
	Username        string `json:"username"`
	EncodedPassword string `json:"encoded_password"`
}

type UserDetail struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Name     string `json:"name"`
	Email    string `json:"email"`
}

type UserUpdate struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

type ProductDetail struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Quantity    int    `json:"quantity"`
	Price       int    `json:"price"`
}

type ProductCreateUpdate struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Quantity    int    `json:"quantity"`
	Price       int    `json:"price"`
}

type CartDetail struct {
	ID    int    `json:"id"`
	Items string `json:"items"`
}

type CartItem struct {
	ProductID int `json:"product_id"`
	Quantity  int `json:"quantity"`
}
