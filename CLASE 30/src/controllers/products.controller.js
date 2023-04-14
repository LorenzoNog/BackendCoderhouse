import productsService from "../services/products.service.js";

class ProductsController{
    
    createProductController = async (req,res) =>{
        const obj = req.body
        try {
            const newProduct = await productsService.createProduct(obj)
            res.json({message:'Producto creado con exito', newProduct})
        } catch (error) {
            res.json({message:'Error en el createProductController', error})
        }
    };
    findOneProductController = async (req,res) =>{
        const {id} = req.params
        try {
            const findOne = await productsService.findOne(id)
            return findOne
        } catch (error) {
            res.json({message:'Error en el findOneProductController'})
        }
    };
    findAllController = async (req,res) =>{
        try {
            const findAll = await productsService.findAll()
            return findAll
        } catch (error) {
            return res.json({message:'Error en el findAllProductController'})
        }
    };
    updateOneController = async (req,res) =>{
        const {id} = req.params;
        const obj = req.body
        try {  
            const updateOne = await productsService.updateOne(id,obj)
            return updateOne
        } catch (error) {
            res.json({message:'Error en updateOneController'})
        }
    };
    deleteByIdController = async (req,res) =>{
        const {id} = req.params;
        try {
            const deleteOne = await productsService.deleteById(id)
            return deleteOne
        } catch (error) {
            res.json({message:'Error en el deleteByIdController'})
        }
    };
}

export default new ProductsController()