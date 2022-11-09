# Go-Backend

 Made from following this guide <https://medium.com/geekculture/full-stack-application-with-go-gin-react-and-mongodb-37b63ef71133>.
 Need to change the model and endpoints to serve needs for a different project.

# Data model (TBD)

	ID          primitive.ObjectID `bson:"_id"`
	Username    *string            `json:"username"`
	Title       *string            `json:"title"`
	Location    *string            `json:"location"`
	Price       *float64           `json:"price"`
	Description *string            `json:"description"`

# API endpoints (TBD)
  
  	//C
	POST("/post/create", routes.AddPost)
	
	//R
	GET("/user/:username", routes.GetPostsByUsername)
	GET("/posts", routes.GetPosts)
	GET("/post/:id/", routes.GetPostById)
	
	//U
	PUT("/user/update/:id", routes.UpdateUsername)
  	PUT("/post/update/:id", routes.UpdatePost)
	
	//D
	DELETE("/post/delete/:id", routes.DeletePost)
