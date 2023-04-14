import businessService from "../services/business.service.js";

class BusinessController{
    
    createBusinessController = async (req,res) =>{
        const obj = req.body
        try {
            const newBusiness = await businessService.createBusiness(obj)
            res.json({message:'Negocio creado con exito', newBusiness})
        } catch (error) {
            res.json({message:'Error en el createBusinessController', error})
        }
    };
    findOneBusinessController = async (req,res) =>{
        const {id} = req.params
        try {
            const findOne = await businessService.findOne(id)
            return findOne
        } catch (error) {
            res.json({message:'Error en el findOneBusinessController'})
        }
    };
    findAllController = async (req,res) =>{
        try {
            const findAll = await businessService.findAll()
            return findAll
        } catch (error) {
            return res.json({message:'Error en el findAllBusinessController'})
        }
    };
    updateOneController = async (req,res) =>{
        const {id} = req.params;
        const obj = req.body
        try {  
            const updateOne = await businessService.updateOne(id,obj)
            return updateOne
        } catch (error) {
            res.json({message:'Error en updateOneBusinessController'})
        }
    };
    deleteByIdController = async (req,res) =>{
        const {id} = req.params;
        try {
            const deleteOne = await businessService.deleteById(id)
            return deleteOne
        } catch (error) {
            res.json({message:'Error en el deleteByIdBusinessController'})
        }
    };
}

export default new BusinessController()