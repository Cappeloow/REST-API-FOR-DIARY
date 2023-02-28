import { Request, Response, NextFunction } from "express";
import { Schema } from "./user/user.model";
export const validate = (schema:typeof Schema) => {

    return (req:Request,res:Response,next:NextFunction) => {
        const { error } = schema.validate(req.body);
        if(!error) return next();
        res.status(400).json(error.message);
    }

}

export const authorization = (req:Request, res:Response, next:NextFunction) => {
    if(req.session){
        if (req.session.user){
            next();
        } else {
          return res.status(401).json("You need to log in");
        }
    }
}

export const isAdmin = (req:Request, res:Response, next:NextFunction) => {
    if(req.session){
        req.session.isAdmin? next() : res.status(401).json("You need to be admin for this");
    }
}
