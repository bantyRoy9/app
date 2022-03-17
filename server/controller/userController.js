import users from '../schema/userSchema.js'
import mongoose  from 'mongoose'

export const getUser = async(req,res)=>{
    const data = await users.find({})
    res.status(200).json({
        status:'success',
        length:data.length,
        data:{
            user: data
        }
    })
}
export const createUser =(req,res)=>{
    console.log(req.body);
    res.status(200).json({
        status:'success',
        data:{
            user: req.body
        }
    })
}