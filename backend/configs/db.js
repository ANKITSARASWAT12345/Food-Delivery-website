import mongoose from "mongoose";
export const connectDB=async()=>{
  await mongoose.connect('mongodb://127.0.0.1:27017/FoodyVoody')
    .then(()=>{console.log('DB conected')})
    .catch(()=>console.log("not connected"))
}