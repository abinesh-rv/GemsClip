package main

import (
	"backend/initializers"
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func init(){
	initializers.LoadEnv()
	initializers.ConnectToDb()
}


func main(){
	
	app := gin.Default()

	companyGroup := app.Group("/company")
	routes.CompanyHandler(companyGroup)

	app.Run()
}