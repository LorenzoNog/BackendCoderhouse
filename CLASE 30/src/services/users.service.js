import usersMongo from '../persistencia/DAOS/UsersDAO/usersMongo.js';
import UsersMongo from '../persistencia/DAOS/UsersDAO/usersMongo.js'

class UsersService{
    constructor(dao){
        this.dao = dao
    }
    createUser = async (obj) => {
        const newUser = await UsersMongo.create(obj)
        return newUser
    };
    
    findOne = async (id) => {
        const findUser = await UsersMongo.findOne(id)
        return findUser
    };

    findAll = async () => {
        const findAll = await UsersMongo.findAll()
        return findAll
    };

    updateOne = async (id,obj) => {
        const updateOne = await UsersMongo.updateOne(id,obj)
        return updateOne
    };

    deleteById = async(id) => {
        const findById = await UsersMongo.deleteById(id)
        return findById
    };
}
export default new UsersService(usersMongo)