import express from "express";
import { createUser, loginUser } from "./user.controller";
const route = express.Router();


route.post('/register', createUser);

route.post('/login', loginUser);
module.exports = route;