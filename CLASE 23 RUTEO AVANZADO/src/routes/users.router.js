import { Router } from "express";

const userRouter = Router()

userRouter.get(/* path */'/:username',/* callbacks middlaware 1,middlaware 2,*/(req,res)=>{
    res.send('recibiendo un username')
})

//error por default siempre que no se cumplan con los parans de los endpoints
/* userRouter.get('*',(req,res)=>{
    res.send('error loco')
}) */

//validacion de params con middleware de router
userRouter.param('username',(req,res,next,username)=>{
    const regex = /^[a-zA-Z]+$/
    const isValid = regex.test(username)
    if(isValid){
        return next()
    }else{
        res.json({message:'error loco'})
    }
})



export default userRouter