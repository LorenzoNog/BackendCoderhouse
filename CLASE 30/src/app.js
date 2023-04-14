import express from "express";
import UsersRouter from "./routes/users.router.js";
import ProductsRouter from './routes/products.router.js'
import OrdersRouter from './routes/orders.router.js'
import BusinessRouter from "./routes/business.router.js";
import config from './config.js'
import './persistencia/MongoDb/mongoConfig.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:'http:/localhost:5500', methods:['GET', 'POST', 'PUT', 'DELETE']}))

app.use('/users', UsersRouter.getRouter())
app.use('/products', ProductsRouter.getRouter())
app.use('/orders', OrdersRouter.getRouter())
app.use('/business', BusinessRouter.getRouter())




app.listen(config.PORT, (req,res)=>{
    console.log(`Escuchando al puerto ${config.PORT}`)
})