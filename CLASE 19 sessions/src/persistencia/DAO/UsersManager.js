import { usersModel } from "../models/users.model.js";
import { hashPassword } from "../../utils.js"; 
import { comparePassword } from "../../utils.js";

export default class UsersManager{
    async createUser(user){
        const {email, password} = user
        try {
            const hashNewPassword = hashPassword(password)
            const existUser = await usersModel.find({email,hashNewPassword})
            if(existUser.length === 0){
                const newUser = {...user, password:hashNewPassword}  
                await usersModel.create(newUser)
                return newUser
            }else{
                return null
            }
        } catch (error) {
            console.log(error)
        }
    }

    async loginUser(user){
        const {email,password} = user;
        try {
            const login = await usersModel.find({email})
            if(login){
                const passwords = comparePassword(password, login.password)
                if(passwords) return login
                else console.log('la contrasenia ingresada no coincide')
            }else{
                return null 
            }
        } catch (error) {
            console.log(error)
        }
    }
}