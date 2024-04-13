package initializers

import (
	"context"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)


var MONGO *mongo.Client
var CompanyCollection *mongo.Collection
var CTX context.Context

func ConnectToDb(){


	uri := os.Getenv("DB_STRING")
	if uri == "" {
		log.Fatal("You must set your 'MONGODB_URI' environment variable.")
	}

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))
	if err != nil {
		panic(err)
	}

	MONGO = client

	CompanyCollection = MONGO.Database("GemsClip").Collection("company")

	CTX = context.TODO()


}