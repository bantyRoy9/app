import questions from "../schema/schema.js"
import users from "../schema/userSchema.js";
import qsnBlock from "../schema/qsnBlockSchema.js";



export const getQsns = async (req, res) =>{
    let questionNo = req.query.questionNo;
    let question;
    try{
        if(questionNo){
            question = await qsnBlock.find({questionNo: questionNo});
        }else{
            question = await qsnBlock.find({questionNo: 1})
        }
        res.status(200).json(question);
    }catch(err){
        res.status(500).json(err)
    }
}
export const userCreate = async(req,res)=>{
    console.log(req.body);
    try{
        const user = await new users(req.body);
        user.save();
        res.status(200).json('user sign success')
    }catch(err){
        res.status(500).json(err);
    }
}
export const userLogin = async (req,res)=>{
    try{
        let user = await users.find({});
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
}
export const userLoginid = async (req,res)=>{
    try{
        let user = await users.findById(req.params.id);
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
}