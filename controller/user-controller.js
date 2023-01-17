
import { response } from 'express';
import User from '../model/user-schema.js';


export const userSignup= async (request,response) =>{           //this is a backend API REQ-req coming from frontens(URL,header)RES-to send something from backend to frontend
    try{
        const exist= await User.findOne({username: request.body.username}); //to check if username already exists (if it is the same username which is inside body of post )
        if(exist)           //401 isuser already exists
        {
            return response.status(401).json({message:'username already exists'});
        }
        const user =request.body;
        const newUser = new User(user);     //validated user
        await newUser.save();               //to insert one object in db we can use save func

        response.status(200).json({message: user});
    }catch(error){
        response.status(500).json({message: error.message});   //500 is internal server error
    }
}
export const userLogin = async(request,response) =>{
    try{
        const username=request.body.username;
        const password=request.body.password;
        let user=await User.findOne({username: username, password: password});
        if(user)
        {
            return response.status(200).json({data: user});
        }
        else{
            return response.status(401).json(`Invalid login`);         //401 is invalid request (if user doesnt exist then )  
        }
    }catch(error){
            response.status(500).json(`Error`,error.message);
    }
}