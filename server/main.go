package main

import (
	"backend/initializers"
	"backend/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init(){
	initializers.LoadEnv()
	initializers.ConnectToDb()
}


func main(){
	
	app := gin.Default()

	config := cors.DefaultConfig()
	// config.AllowAllOrigins = true
	config.AllowOrigins = []string{"http://localhost:3000"}

	app.Use(cors.New(config))

	companyGroup := app.Group("/company")
	routes.CompanyHandler(companyGroup)

	app.Run()
}

