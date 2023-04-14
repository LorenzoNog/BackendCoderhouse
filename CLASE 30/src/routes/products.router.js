import productsController from "../controllers/products.controller.js";
import { Router } from "express";

class ProductsRouter{
    constructor(){
        this.productsRouter = Router()
        this.productsRouter.post('/', productsController.createProductController);
        this.productsRouter.get('/', productsController.findAllController);
        this.productsRouter.get('/:id',  productsController.findOneProductController);
        this.productsRouter.put('/:id', productsController.updateOneController);
        this.productsRouter.delete('/:id', productsController.deleteByIdController);
    }

    getRouter(){
        return this.productsRouter
    }
}


export default new ProductsRouter()