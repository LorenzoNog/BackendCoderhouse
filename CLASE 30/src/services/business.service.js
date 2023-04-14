import BusinessMongo from '../persistencia/DAOS/BusinessDAO/businessMongo.js'

class BusinessService{
    constructor(dao){
        this.dao = dao
    }
    createBusiness= async (obj) => {
        const newBusiness = await BusinessMongo.create(obj)
        return newBusiness
    };
    
    findOne = async (id) => {
        const findBusiness = await BusinessMongo.findOne(id)
        return findBusiness
    };

    findAll = async () => {
        const findAll = await BusinessMongo.findAll()
        return findAll
    };

    updateOne = async (id,obj) => {
        const updateOne = await BusinessMongo.updateOne(id,obj)
        return updateOne
    };

    deleteById = async(id) => {
        const findById = await BusinessMongo.deleteById(id)
        return findById
    };
}
export default new BusinessService(BusinessMongo)