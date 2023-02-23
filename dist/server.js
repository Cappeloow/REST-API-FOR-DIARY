"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
//middlewares
app.use(express_1.default.json());
//Routes
//init app / connect to DB
const initApp = () => {
    mongoose_1.default.set("strictQuery", false);
    mongoose_1.default.connect("mongodb://localhost:27017/ts-api-diary").
        then(() => console.log("connected to mongoDB"))
        .catch(() => console.log("couldn't connect to the database"));
    app.listen(3000, () => console.log("server is up on port 3000"));
};
initApp();
