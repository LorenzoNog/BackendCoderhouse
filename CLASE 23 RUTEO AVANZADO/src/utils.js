import  jwt  from "jsonwebtoken";

export const generarToken = (user) =>{
    return jwt.sign({user}, 'secretKey')
}