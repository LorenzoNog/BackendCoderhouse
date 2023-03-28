import { Router } from "express";
import { generateToken } from "../utils.js";
import UsersManager from "../dao/mongoManagers/usersManager.js";

const jwtRouter = Router()
const usersManager = new UsersManager()

jwtRouter.post('/login',async(req,res)=>{
    const user = await usersManager.loginUser(req.body);
    if(user){
        const token = generateToken(user)
        return res.json({token})
    }else{
        res.json({message:'Error'})
    }
    
})


export default jwtRouter