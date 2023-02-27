"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = exports.validate = void 0;
const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (!error)
            return next();
        res.status(400).json(error.message);
    };
};
exports.validate = validate;
const authorization = (req, res, next) => {
    if (req.session) {
        if (req.session.user) {
            next();
        }
        else {
            return res.status(401).json("You need to log in");
        }
    }
};
exports.authorization = authorization;
