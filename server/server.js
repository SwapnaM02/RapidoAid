const express = require('express');
const app = express();
require('dotenv').config();
const connectDB=require('./config/db');
const userRouter = require('./routes/userRoutes');

console.log("server database", process.env.DB_URL);
connectDB();

// Routes
app.use(express.json());
app.use('/api/users',userRouter);

app.listen(8082,()=>{
    console.log('Server is Running......');
})