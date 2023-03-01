"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const cors_1 = __importDefault(require("cors"));
const UserRoute = require('./user/user.route');
const DiaryRoute = require("./diary/diary.route");
const PostRoute = require('./post/post.route');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_session_1.default)({
    secret: "s3cr3t",
    maxAge: 60 * 1000
}));
app.use(express_1.default.json());
app.use('/api/post', PostRoute);
app.use('/api/diary', DiaryRoute);
app.use('/api/users', UserRoute);
const initApp = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.set("strictQuery", false);
    yield mongoose_1.default.connect('mongodb://127.0.0.1:27017/diary-api-js-db');
    app.listen(3000, () => console.log("server is up on port 3000"));
});
initApp();
