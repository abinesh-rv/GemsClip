package controllers

import (
	"backend/initializers"
	"context"
	"encoding/json"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	// "go.mongodb.org/mongo-driver/mongo"
)

// var companyCollection *mongo.Collection

// func init(){
//     companyCollection = initializers.MONGO.Database("GemsClip").Collection("Company")
// }

func GetCompany(c *gin.Context){

	ctx := context.TODO()

	companyCollection := initializers.MONGO.Database("GemsClip").Collection("Company")

    cursor,err := companyCollection.Find(ctx,bson.M{})

	if err != nil {
		log.Fatal(err)
	}

	var results []bson.M

	if err = cursor.All(ctx, &results); err != nil{
		log.Fatal(err)
	}
    
    jsonData,err:= json.Marshal(results)

	if err != nil {
      log.Fatal(err)
	}

	fmt.Println(string(jsonData))
}