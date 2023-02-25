import UserModel from "./user.model";
import { Request, Response } from "express-serve-static-core";
import bcrypt from "bcrypt";

export const createUser = async (req:Request,res:Response) => {
  try {
    const newUser = await new UserModel(req.body)
    const isTaken = await UserModel.findOne({username:newUser.username});
    if (isTaken){
      res.status(400).json(`that username is already taken`);
    } else if(!newUser){
            res.status(400).json(req.body);
    }
    const hashedPassword = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync());
    newUser.password = hashedPassword
    
    const createUser = await UserModel.create({
      username:newUser.username,
      password:newUser.password
    }) 

    res.status(200).json(newUser);
  } catch (error) {
    res.status(404).json(error);
  }
      
        
}



export const loginUser = async (req:Request,res:Response) => {
  
}
