package store

import "time"

type comment struct {
	User    string `json:"user"`
	Comment string `json:"comment"`
}

type Blog struct {
	User             string    `json:"user"`
	Title            string    `json:"title"`
	ShortDescription string    `json:"short_description"`
	Description      string    `json:"description"`
	PublishedDate    time.Time `json:"posted_on"`
	ImgUrl             string    `json:"img_url"`
	Seen             string    `json:"seen"`
	Likes            string    `json:"likes"`
	Reacts           string    `json:"reacts"`
	Bookmarks        string    `json:"bookmarks"`
	Comments         []comment `json:"comments"`
}

type blogStore struct {
	Blogs []Blog `json:"blogs"`
}

var store *blogStore = nil

func GetBlogStore() *blogStore {
	if store == nil {
		store = &blogStore{Blogs: getDummyBlogs()}
	}
	return store
}
