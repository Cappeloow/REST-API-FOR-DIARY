"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import getAllPosts from "./diary.controller";
const route = express_1.default.Router();
//isAdmin function will determine if we can get all or just by the userID.
route.get('/library');
module.exports = route;
