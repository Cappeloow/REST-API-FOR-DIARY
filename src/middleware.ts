import { Request, Response, NextFunction } from "express";
import { Schema } from "./user/user.model";
export const validate = (schema:typeof Schema) => {

    return (req:Request,res:Response,next:NextFunction) => {
        const { error } = schema.validate(req.body);
        if(!error) return next();
        res.status(400).json(error.message);
    }

}
