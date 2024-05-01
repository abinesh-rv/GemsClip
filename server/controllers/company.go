package controllers

import (
	"backend/initializers"
	"backend/models"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)


func GetCompany(c *gin.Context){

    cursor,err := initializers.CompanyCollection.Find(initializers.CTX,bson.D{})

	if err != nil {
		log.Fatal(err)
	}

	var results []models.CompanyBasicInfo

	if err = cursor.All(initializers.CTX, &results); err != nil{
		log.Fatal(err)
	}
    
	jsonData,err := json.Marshal(results)

	if err != nil {
      log.Fatal(err)
	}

	c.JSON(http.StatusOK,gin.H{
		"data":string(jsonData),
	})
}

func GetCompanyById(c *gin.Context){

	ObjectId,err := primitive.ObjectIDFromHex(c.Param("id"))

	if err != nil{
		log.Fatal("error in converting string to objectId")
	}
    
	var result models.Company

	err = initializers.CompanyCollection.FindOne(initializers.CTX,bson.D{{Key: "_id",Value: ObjectId}}).Decode(&result)

	if err != nil {
		fmt.Println(err)
	}

	jsonData,_ := json.Marshal(result)

	c.JSON(http.StatusOK,gin.H{
		"data":string(jsonData),
	})

}

func UpdateCompanyById(c *gin.Context){

	ObjectId,err := primitive.ObjectIDFromHex(c.Param("id"))

	if err != nil{
		log.Fatal("error in converting string to objectId")
	}

	var company models.Company

	c.Bind(&company)

	_,err = initializers.CompanyCollection.ReplaceOne(initializers.CTX,bson.D{{Key: "_id",Value: ObjectId}},company)

	if err != nil {
		fmt.Println(err)
	}
	
	GetCompanyById(c);

}