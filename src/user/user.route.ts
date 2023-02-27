import express from "express";
import { Schema } from "./user.model";
import { validate } from "../middleware";
import { createUser, loginUser } from "./user.controller";
const route = express.Router();


route.post('/register',validate(Schema), createUser);

route.post('/login', validate(Schema), loginUser);
module.exports = route;