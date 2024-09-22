import mongoose from "mongoose";

const foodSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String,

    },
    description:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:Number
    },
    image:{
        required:true,
        type:String
    },
    category:{
        reqired:true,
        type:String
    }
})

const foodModel=mongoose.model.foodModel || mongoose.model('foodModel',foodSchema);
export default foodModel;