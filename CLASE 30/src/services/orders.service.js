import OrdersMongo from "../persistencia/DAOS/OrdersDAO/ordersMongo.js";

class OrdersService{
    constructor(dao){
        this.dao = dao
    }
    createOrder= async (obj) => {
        const newOrder = await OrdersMongo.create(obj)
        return newOrder
    };
    
    findOne = async (id) => {
        const findOrder = await OrdersMongo.findOne(id)
        return findOrder
    };

    findAll = async () => {
        const findAll = await OrdersMongo.findAll()
        return findAll
    };

    updateOne = async (id,obj) => {
        const updateOne = await OrdersMongo.updateOne(id,obj)
        return updateOne
    };

    deleteById = async(id) => {
        const findById = await OrdersMongo.deleteById(id)
        return findById
    };
}
export default new OrdersService(OrdersMongo)