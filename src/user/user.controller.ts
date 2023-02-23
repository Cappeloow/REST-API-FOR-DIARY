import UserModel from "./user.model";
import { Request, Response } from "express-serve-static-core";

const createUser = async (req:Request,res:Response) => {
        const newUser = await UserModel.create(req.body)
        if(!newUser){
                res.status(400).json(req.body);
        }
        console.log(newUser);
        res.status(201).json(newUser);
}

export {createUser}