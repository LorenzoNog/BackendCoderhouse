import ProductsMongo from '../persistencia/DAOS/ProductsDAO/productsMongo.js'

class ProductsService{
    constructor(dao){
        this.dao = dao
    }
    createProduct = async (obj) => {
        const newProduct =await ProductsMongo.create(obj)
        return newProduct
    };
    
    findOne = async (id) => {
        const findProduct = await ProductsMongo.findOne(id)
        return findProduct
    };

    findAll = async () => {
        const findAll = await ProductsMongo.findAll()
        return findAll
    };

    updateOne = async (id,obj) => {
        const updateOne = await ProductsMongo.updateOne(id,obj)
        return updateOne
    };

    deleteById = async(id) => {
        const findById = await ProductsMongo.deleteById(id)
        return findById
    };
}
export default new ProductsService(ProductsMongo)