import UserModel from "./user.model";
import { Request, Response } from "express-serve-static-core";
import bcrypt from "bcrypt";

const createUser = async (req:Request,res:Response) => {

        const newUser = await new UserModel(req.body)
        if(!newUser){
                res.status(400).json(req.body);
        }
        const hashedPassword = newUser.password;
        hashPassword(newUser);
        newUser.password = hashedPassword
        
        res.status(200).json(newUser);



        
}

async function hashPassword (user:any) {

        const password = user.password
        const saltRounds = 10;
      
        const hashedPassword = await new Promise((resolve, reject) => {
          bcrypt.hash(password, saltRounds, function(err, hash) {
            if (err) reject(err)
            resolve(hash)
          });
        })
      
        return hashedPassword
      }

export {createUser}