import mongoose from "mongoose";


export const Connection =async (URL) =>{
   
    try{
       await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser:true});
       console.log('database conncected successfully');
    }catch(error){
        console.log("error while connecting to database",error.message);
    }
} 
export default Connection;