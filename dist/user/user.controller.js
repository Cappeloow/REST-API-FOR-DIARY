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
exports.loginUser = exports.createUser = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield new user_model_1.default(req.body);
        const isTaken = yield user_model_1.default.findOne({ username: newUser.username });
        if (isTaken) {
            res.status(400).json(`that username is already taken`);
        }
        else if (!newUser) {
            res.status(400).json(req.body);
        }
        const hashedPassword = bcrypt_1.default.hashSync(newUser.password, bcrypt_1.default.genSaltSync());
        newUser.password = hashedPassword;
        const createUser = yield user_model_1.default.create({
            username: newUser.username,
            password: newUser.password
        });
        res.status(200).json(newUser);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.loginUser = loginUser;
