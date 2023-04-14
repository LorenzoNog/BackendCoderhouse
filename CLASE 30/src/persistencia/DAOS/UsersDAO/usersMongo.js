import { usersModel } from "../../MongoDb/Models/users.model.js"
import BasicMongo from "../BasicMongo.js";

class UsersMongo extends BasicMongo{
    constructor(model){
        super(model)
        //con el super le estoy pasando al padre todos los parametros que necesita y ya podria utilizar todos los metodos de basicmongo 
    }
}

export default new UsersMongo(usersModel)
