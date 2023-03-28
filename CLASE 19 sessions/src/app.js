import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
//import FileStore from 'session-file-store'
import { _dirname } from './utils.js'
import usersRouter from './routes/users.router.js'
import './persistencia/dbConfig.js'
import MongoStore from 'connect-mongo'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import passport from 'passport'
import './passport/passportStrategies.js'
const app = express()
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//handlebars
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views',_dirname+'/views')
//file-session
/* const fileStore = FileStore(session)


//configuracion session
app.use((session({
    secret:'secretKeySession',
    resave: false,
    saveUninitialized: true,
    store: new fileStore({
        path: _dirname+'/sessions'
    })

}))) */

//mongo section

app.use((session({
    secret:'secretKeySession',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        mongoUrl:'mongodb+srv://bachicha:bachicha@cluster0.ummjcbo.mongodb.net/sessions?retryWrites=true&w=majority'
    })

})))

//passport
app.use(passport.initialize())
app.use(passport.session())

//routes
app.use('/users', usersRouter)
app.use('/views', viewsRouter)


app.listen('3000',()=>{
    console.log('Escuchando al puerto 3000')
})