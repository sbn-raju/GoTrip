import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

console.log(`${DB_NAME}`);
// console.log(process.env.MONGODB_URL);
const connectDB = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("DB connected");
    }
    catch(error){
          console.log(error);
    };
}

export default connectDB;