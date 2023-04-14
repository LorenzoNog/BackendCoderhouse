import businessController from '../controllers/business.controller.js'
import { Router } from "express";

class BusinessRouter{
    constructor(){
        this.businessRouter = Router()
        this.businessRouter.post('/', businessController.createBusinessController);
        this.businessRouter.get('/', businessController.findAllController);
        this.businessRouter.get('/:id',  businessController.findOneBusinessController);
        this.businessRouter.put('/:id', businessController.updateOneController);
        this.businessRouter.delete('/:id', businessController.deleteByIdController);
    }

    getRouter(){
        return this.businessRouter
    }
}


export default new BusinessRouter()