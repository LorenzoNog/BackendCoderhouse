import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
   firstName:{
    type:String,
    required:true
   },
   lastname:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   telefono:{
    type:Number,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true
   }
})

export const usersModel = mongoose.model('users', usersSchema)