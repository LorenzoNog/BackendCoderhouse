import { Router } from "express";

const viewsRouter = Router()

viewsRouter.get('/registro',(req,res)=>{
    res.render('registro')
})
viewsRouter.get('/',(req,res)=>{
    res.render('login')
})
viewsRouter.get('/errorRegister',(req,res)=>{
    res.render('errorRegister')
})
viewsRouter.get('/errorLogin',(req,res)=>{
    res.render('errorLogin')
})
viewsRouter.get('/perfil',(req,res)=>{
    res.render('perfil')
})



export default viewsRouter