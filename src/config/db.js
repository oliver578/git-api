import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

async function connecetDb(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('The Db is connecting');
    } catch (error) {
        console.log(error);
        console.log('the conncting of Db failed');
    }
}connecetDb().catch(err => console.log(err))

export default connecetDb ;