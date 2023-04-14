import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema({
  user: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Users",
    },
  ],
  business:[
    {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Business'
    }
  ],
  products: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Products",
    },
  ],
  total: {
    type: Number,
  },
});

export const orderModel = mongoose.model("Order", orderSchema);
