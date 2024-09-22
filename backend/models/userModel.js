import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{required:true,type:String},
        email:{type:String,required:true,unique:true},
        password:{type:String, required:true,unique:true},
        cartData:{type:Object,default:{}}

    
},{minimize:false})

const userModel=mongoose.models.userModel || mongoose.model("userModel",userSchema);
export default userModel;