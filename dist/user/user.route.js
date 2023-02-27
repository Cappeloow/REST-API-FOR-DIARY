"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_model_1 = require("./user.model");
const middleware_1 = require("../middleware");
const user_controller_1 = require("./user.controller");
const route = express_1.default.Router();
route.post('/register', (0, middleware_1.validate)(user_model_1.Schema), user_controller_1.createUser);
route.post('/login', (0, middleware_1.validate)(user_model_1.Schema), user_controller_1.loginUser);
module.exports = route;
