import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let db;
const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
    await mongoClient.connect();
    db = mongoClient.db(process.env.MONGO_DB);
    console.log("MongoDB database is running.")
} catch (error) {
    console.error("Error connecting to database", error);
}

export default db;