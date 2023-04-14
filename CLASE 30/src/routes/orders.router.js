import ordersController from "../controllers/orders.controller.js";
import { Router } from "express";

class OrdersRouter{
    constructor(){
        this.ordersRouter = Router()
        this.ordersRouter.post('/', ordersController.createOrderController);
        this.ordersRouter.get('/', ordersController.findAllController);
        this.ordersRouter.get('/:id',  ordersController.findOneOrderController);
        this.ordersRouter.put('/:id', ordersController.updateOneController);
        this.ordersRouter.delete('/:id', ordersController.deleteByIdController);
    }

    getRouter(){
        return this.ordersRouter
    }
}


export default new OrdersRouter()