import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'please fill your your name'],
    },
    email:{
        type:String,
        required:[true, 'please provide your email'],
        unique:true,
        validate:[validator.isEmail ]
    },
    password:{
        type:String,
        required:[true, 'password must be provided'],
        minlength:5
    }

})
const users = mongoose.model('users', UserSchema);



export default users