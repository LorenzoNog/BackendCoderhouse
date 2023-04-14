import mongoose from "mongoose";
import config from "../../config.js";

const mongo_uri = config.MONGO_URI

mongoose.connect(mongo_uri)
.then(()=> console.log('Conectado a la base de datos'))
.catch((error) => console.log(error))