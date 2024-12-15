const express = require("express");
const User = require("../model/userModel");

const {
    registerUser,
    loginUser,
    getCurrentUser,
   
  } = require("../controllers/usercontroller.js");

  const auth = require("../middlewares/authMiddleware");

const userRouter=express.Router();

// Register a user

userRouter.post("/register",registerUser);

userRouter.post("/login",loginUser);
userRouter.get("/get-current-user",auth,getCurrentUser);

module.exports = userRouter;

