import usersService from "../services/users.service.js";

class UsersController{
    
    createUserController = async (req,res) =>{
        const obj = req.body
        try {
            const newUser = await usersService.createUser(obj)
            res.json({message:'Usuario creado con exito', newUser})
        } catch (error) {
            res.json({message:'Error en el createUserController', error})
        }
    };
    findOneUserController = async (req,res) =>{
        const {id} = req.params
        try {
            const findOne = await usersService.findOne(id)
            return findOne
        } catch (error) {
            res.json({message:'Error en el findOneUserController'})
        }
    };
    findAllController = async (req,res) =>{
        try {
            const findAll = await usersService.findAll()
            return findAll
        } catch (error) {
            return res.json({message:'Error en el findAllController'})
        }
    };
    updateOneController = async (req,res) =>{
        const {id} = req.params;
        const obj = req.body
        try {  
            const updateOne = await usersService.updateOne(id,obj)
            return updateOne
        } catch (error) {
            res.json({message:'Error en updateOneController'})
        }
    };
    deleteByIdController = async (req,res) =>{
        const {id} = req.params;
        try {
            const deleteOne = await usersService.deleteById(id)
            return deleteOne
        } catch (error) {
            res.json({message:'Error en el deleteByIdController'})
        }
    };
}

export default new UsersController()