import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let mongoClient;

if (!process.env.MONGODB_URI){
    throw new Error("Adding Mongo URI to .env.local is needed");
}

export async function connectToDB(){
    try {
        if (mongoClient){
            return {mongoClient};

        }
        mongoClient = await (new MongoClient(uri, options)).connect();
        console.log("CONNECTED!");
        return {mongoClient};
        
    } catch (e) {
        console.error(e);
        
    }
}