import usersController from "../controllers/users.controller.js";
import { Router } from "express";

class UsersRouter{
    constructor(){
        this.usersRouter = Router()
        this.usersRouter.post('/', usersController.createUserController);
        this.usersRouter.get('/', usersController.findAllController);
        this.usersRouter.get('/:id',  usersController.findOneUserController);
        this.usersRouter.put('/:id', usersController.updateOneController);
        this.usersRouter.delete('/:id', usersController.deleteByIdController);
    }

    getRouter(){
        return this.usersRouter
    }
}


export default new UsersRouter()