//llamando al router personalizado
import Router from "./router.js";
import {usersModel} from '../persistencia/models/users.model.js'
import {generarToken} from  '../utils.js'


//al extender obtengo las funcionalidades del router.js
export default class usersCustomeRouter extends Router{
    init(){
        //publica
        this.get('/',['PUBLICO'],(req,res)=>{
            res.respuestaExitosa('Exitoso')
        })
        //para administradores
        this.post('/',['ADMIN'],async(req,res)=>{
            await usersModel.create(req.body)
            res.respuestaExitosa('Usuario creado con exito')
        })

        this.post('/login',async(req,res)=>{
            const {username,password} = req.body
            const user = await usersModel.findOne({username,password})
            if(user){
                const token = generarToken(user)
                res.respuestaExitosa(token)
            }else{
                res.respuestaToken('Usuario no existe')
            }
        })
    }
}