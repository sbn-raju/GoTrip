import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO}/${DB_NAME}`);
        console.log("DB connected");
    }
    catch(error){
          console.log(error);
    };
}

export default connectDB;