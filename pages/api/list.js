import { connectToDB } from "../../lib/connectToDB";

export default async function handler(request, response){
    try {
        const { mongoClient } = await connectToDB;
        const db = mongoClient.db("sample_restaurants");
        const collection = db.collection("restaurants");
        const results = await collection
            .find({})
            .project({
                grades: 0,
                borough: 0,
                restaurant_id: 0,
            })
            .limit(10)
            .toArray();

        response.status(200).json(results);


        
    } catch (e) {
        console.error(e);
        response.status(500).json(e);
        
    }
}