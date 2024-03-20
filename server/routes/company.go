package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)



func CompanyHandler(companyRoutes *gin.RouterGroup){

	companyRoutes.GET("/",controllers.GetCompany)

}