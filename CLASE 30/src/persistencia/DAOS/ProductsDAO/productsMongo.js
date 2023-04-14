import { productsModel } from "../../MongoDb/Models/products.model.js"
import BasicMongo from "../BasicMongo.js";

class ProductsMongo extends BasicMongo{
    constructor(model){
        super(model)
        //con el super le estoy pasando al padre todos los parametros que necesita y ya podria utilizar todos los metodos de basicmongo 
    }
}

export default new ProductsMongo(productsModel)
