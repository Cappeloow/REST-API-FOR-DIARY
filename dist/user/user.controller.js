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
exports.createUser = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield new user_model_1.default(req.body);
    if (!newUser) {
        res.status(400).json(req.body);
    }
    const hashedPassword = newUser.password;
    hashPassword(newUser);
    newUser.password = hashedPassword;
    res.status(200).json(newUser);
});
exports.createUser = createUser;
function hashPassword(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const password = user.password;
        const saltRounds = 10;
        const hashedPassword = yield new Promise((resolve, reject) => {
            bcrypt_1.default.hash(password, saltRounds, function (err, hash) {
                if (err)
                    reject(err);
                resolve(hash);
            });
        });
        return hashedPassword;
    });
}
