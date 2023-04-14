import ordersService from "../services/orders.service.js";

class OrdersController{
    
    createOrderController = async (req,res) =>{
        const obj = req.body
        try {
            const newOrder = await ordersService.createOrder(obj)
            res.json({message:'Orden creada con exito', newOrder})
        } catch (error) {
            res.json({message:'Error en el createOrderController', error})
        }
    };
    findOneOrderController = async (req,res) =>{
        const {id} = req.params
        try {
            const findOne = await ordersService.findOne(id)
            return findOne
        } catch (error) {
            res.json({message:'Error en el findOneOrderController'})
        }
    };
    findAllController = async (req,res) =>{
        try {
            const findAll = await ordersService.findAll()
            return findAll
        } catch (error) {
            return res.json({message:'Error en el findAllOrderController'})
        }
    };
    updateOneController = async (req,res) =>{
        const {id} = req.params;
        const obj = req.body
        try {  
            const updateOne = await ordersService.updateOne(id,obj)
            return updateOne
        } catch (error) {
            res.json({message:'Error en updateOneOrderController'})
        }
    };
    deleteByIdController = async (req,res) =>{
        const {id} = req.params;
        try {
            const deleteOne = await ordersService.deleteById(id)
            return deleteOne
        } catch (error) {
            res.json({message:'Error en el deleteByIdOrderController'})
        }
    };
}

export default new OrdersController()