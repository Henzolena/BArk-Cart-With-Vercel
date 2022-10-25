import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let MongoClient;

if (!process.env.MONGODB_URI){
    throw new Error("Adding Mongo URI to .env.local is needed");
}