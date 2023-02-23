import express from "express";
import mongoose from "mongoose";
const app = express();


//middlewares

app.use(express.json());
//Routes

//init app / connect to DB
const initApp = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb://localhost:27017/ts-api-diary").
    then(() => console.log("connected to mongoDB"))
    .catch(() => console.log("couldn't connect to the database"))
    app.listen(3000, () => console.log("server is up on port 3000"));
}

initApp();