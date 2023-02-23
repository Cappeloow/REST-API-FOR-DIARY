import express from "express";
import { createUser } from "./user.controller";
const route = express.Router();


route.post('/register', createUser);


module.exports = route;