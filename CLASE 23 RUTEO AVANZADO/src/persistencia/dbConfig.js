import mongoose from "mongoose";

mongoose.connect('mongodb+srv://bachicha:bachicha@cluster0.ummjcbo.mongodb.net/routerAvanzado?retryWrites=true&w=majority')
.then(()=>console.log('conectado a la db'))
.catch((error) => console.log(error))