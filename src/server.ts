import express from "express";
import mongoose from "mongoose";
const UserRoute = require('./user/user.route');
const app = express();




app.use(express.json());


app.use('/api/users', UserRoute )

const initApp = async ()   => {
    mongoose.set("strictQuery", false);
    await mongoose.connect('mongodb://127.0.0.1:27017/diary-api-js-db')
    app.listen(3000, () => console.log("server is up on port 3000"));
}

initApp();