"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (!error)
            return next();
        res.status(400).json(error.message);
    };
};
exports.validate = validate;
