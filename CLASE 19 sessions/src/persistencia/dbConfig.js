import mongoose from "mongoose";

mongoose.connect('mongodb+srv://bachicha:bachicha@cluster0.ummjcbo.mongodb.net/sessions?retryWrites=true&w=majority')
.then(()=>console.log('conectado a mongo'))
.catch((error) => console.log(error))
