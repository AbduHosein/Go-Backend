# Go-Backend

 Made from following this guide <https://medium.com/geekculture/full-stack-application-with-go-gin-react-and-mongodb-37b63ef71133>.
 Need to change the model and endpoints to serve needs for a project.

# Prereq
To start first make sure you have the latest versions of Node, npm, gin, etc (look at imports for files to "go get ..."). Additionally you'll need to create a .env file in the server directory of the structure:

	PORT=5000
	MONGODB_URL= <URL from a mongodb cluster>

# How to run:
Once your cluster is up and running, all prereqs are downloaded, and your .env file is formatted properly.
In the ./server directory type:
	
	go run main.go

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
