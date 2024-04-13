package controllers

import (
	"backend/initializers"
	"backend/models"
	"encoding/json"
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
	log.Println(ObjectId)

	if err != nil{
		log.Fatal("error in converting string to objectId")
	}
    
	var result models.Company

	err=initializers.CompanyCollection.FindOne(initializers.CTX,bson.D{{Key: "_id",Value: ObjectId}}).Decode(&result)

	if err != nil {
		log.Fatal("in get company by objectid")
	}

	jsonData,_ := json.Marshal(result)

	c.JSON(http.StatusOK,gin.H{
		"data":string(jsonData),
	})

}