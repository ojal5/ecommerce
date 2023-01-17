import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {                                      //Validation
        type: String,
        required:true,
        trim:true,
        min: 5,
        max:20
    },
    lastname: {
        type: String,
        required:true,
        trim:true,
        min: 5,
        max:20
    },
    username: {
        type: String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        index: true
    },
    email:{
        type: String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password: {
        type:String,
        required:true
    },
    mobileno: {
        type:String,
        required:true
    }
});

const user=mongoose.model('user',userSchema)  //collection name is user actually users and we need to validate this collction using userSchema
export default user;