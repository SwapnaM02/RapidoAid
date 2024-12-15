const mongoose=require("mongoose");
// driver
require('dotenv').config();
const dbURL = process.env.DB_URL;
// once
const connectDB = async()=>{
    try{
        await mongoose.connect(dbURL);
        console.log("connected to db");
    }
    catch(err){
        console.log(err);

    }
};

module.exports=connectDB;