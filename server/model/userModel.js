const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },
    
    email:{
        type:String,
        required: true,
    },
    
    password: {
        type: String,
        required: true,
    },
    
    isAdmin:{
        type:Boolean,
        required: true,
        default:false,
    
    },

    role:{
        type:String,
        required:true,
        default:'user',
        enum:['admin','user','hospital','ambulance']
    }
});



const UserModel=mongoose.model("users",userSchema);
module.exports=UserModel;

