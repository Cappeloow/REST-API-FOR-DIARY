import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const UserRoute = require('./user/user.route');
const DiaryRoute = require("./diary/diary.route");
const PostRoute = require('./post/post.route');
const app = express();


app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true
  }));





app.use(express.json());



app.use('/api/post', PostRoute);
app.use('/api/diary', DiaryRoute);
app.use('/api/users', UserRoute)

const initApp = async () => {
    mongoose.set("strictQuery", false);
    await mongoose.connect('mongodb://127.0.0.1:27017/diary-api-js-db')
    app.listen(3000, () => console.log("server is up on port 3000"));
}

initApp();