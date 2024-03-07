const mongoose = require("mongoose");
const DB_NAME = require("../constants.js");
const connectDB = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO}/${DB_NAME}`);
        console.log("DB connected");
    }
    catch(error){
          console.log(error);
    };
}

module.exports = connectDB;