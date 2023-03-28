import { Router as ExpressRouter } from "express";
import jwt from 'jsonwebtoken'

export default class Router {
  constructor() {
    this.router = ExpressRouter();
    this.init();
  }
  getRouter() {
    return this.router;
  }
  //cuando alguien ejecute una nueva instancia de Router y ejecute el metodo getRouter, se va a estar ejecutando 'this.router = ExpressRouter()', que no es otra cosa que 'const userRouter = Router()'

  //aca vamos a customizar como es que YO quiero que se ejecuten mi get,post,put y delete
  //Este get puede llegar a recibir un path, que viene a ser el endpoint(username), el resto de callbacks se agrupan con un recoperator. Esto se repite en todas las rutas.
  get(path,roles ,...callbacks) {
    this.router.get(
      path,/* callback interno */ this.generarRespuestas,this.manejoRoles(roles),
      /* funcion que se va a encargar de decir que hacer con esos callbacks */ this.resolveCallbacks(callbacks)
    );
  }

  post(path,roles , ...callbacks) {
    this.router.get(path,this.generarRespuestas,this.manejoRoles(roles),this.resolveCallbacks(callbacks));
  }

  put(path,roles , ...callbacks) {
    this.router.get(path,this.generarRespuestas,this.manejoRoles(roles), this.resolveCallbacks(callbacks));
  }

  delete(path,roles , ...callbacks) {
    this.router.get(path,this.generarRespuestas,this.manejoRoles(roles), this.resolveCallbacks(callbacks));
  }

  resolveCallbacks(callbacks) {
    //va a recorrer el array de funciones callbacks y a ejecutar cada una de ellas
    return callbacks.map((cb) => 
      async (...params) => {
        try {
          await cb.apply(
            this,
            /* como segundo parametro los params que puede llegar a recibir la funcion */ params
          );
        } catch (error) {
          console.log(error);
        }
      });
  }

  //funcion para generar respuestas personalizadas.
  //si lo que hizo un programador salio de manera exitosa, va a llamar a res.respuestaExitosa, y viceversa.
  generarRespuestas(req,res,next){
    res.respuestaExitosa = (msn) =>{
        res.json({status:'Exitoso', message:msn})
    };
    res.respuestaFallida = (msn) =>{
        res.json({status:'Error', error:msn})
    };
    res.respuestaToken = (token) => {
        res.json({message:"token generado correctamente", token})
    }
    next()
  }

  manejoRoles(roles){
    return (req,res,next) =>{
        if(roles.include('PUBLICO')) return next()
        const authHeader = req.get('Authorization')
        if(!authHeader) return res.json({message:'error autorizacion'})
        const token = authHeader.split(' ')[1]
        const userToken = jwt.verify(token, 'secretKey')
        if(roles.includes(userToken.user.role)) return next()
        res.json({message:'error autorizacion'})

    }   
  }
  /* middleware interno dentro de router para manejo de roles */
}
