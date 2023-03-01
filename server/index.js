import express from "express";
import dotenv from"dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";

const app = express();
dotenv.config();

const connect = () =>{
    mongoose.set("strictQuery",false);
    mongoose.connect(process.env.MONGO)
    .then(()=>{console.log('connected to mongodb database');
}).catch(err=>{ throw err;} );
};


app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);


app.listen(8000,() => {
    connect();
    console.log('Server is running on port 8000');
});