import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async ()=>{
  try {

    const connectionInstance =  await mongoose.connect(`${process.env.sample.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance}`);
    
    
  } catch (error) {
    console.log("MONGOOSE connection  Faild", error);
    process.exit(1)
    
    
  }
}
export default connectDB