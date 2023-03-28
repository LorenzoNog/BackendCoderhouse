import express from 'express'
import userRouter from './routes/users.router.js'
import './persistencia/dbConfig.js'
import usersCustomeRouter from './routes/usersCustom.router.js'

const app = express()
const UserCustomeRouter = new usersCustomeRouter()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users', userRouter)
app.use('/userscustome',/* inicializar la clase con getRouter */UserCustomeRouter.getRouter())

app.listen(2022,()=>{
    console.log('Escuchando al puerto 2022')
} )