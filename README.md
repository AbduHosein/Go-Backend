# Server

 Made from following this guide <https://medium.com/geekculture/full-stack-application-with-go-gin-react-and-mongodb-37b63ef71133>.
 Need to change the model and endpoints to serve needs for a project.

# Dependencies
To start first make sure you have al the go dependencies you need to run the server (look at imports for files to "go get URL"). On my Windows machine I had to go get individually, but on my linux machine simplying running go run main.go installed the required dependencies. Additionally you'll need to create a .env file in the ./server directory of the structure:

	PORT=5000
	MONGODB_URL= <URL from a mongodb cluster>

# How to run:
Once your cluster is up and running, all prereqs are downloaded, and your .env file is formatted properly.
In the ./server directory type:
	
	go run main.go

# Data models (TBD)
## Post

	ID          primitive.ObjectID `bson:"_id"`
	Username    *string            `json:"username"`
	Title       *string            `json:"title"`
	Location    *string            `json:"location"`
	Price       *float64           `json:"price"`
	Description *string            `json:"description"`

## User?

# API endpoints (TBD)

## Posts  
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
