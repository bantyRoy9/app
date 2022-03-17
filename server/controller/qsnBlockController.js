import qsnBlock from "../schema/qsnBlockSchema.js"

export const getQsnBlock = async (req,res)=>{
    try{
        let data = await qsnBlock.find({});
        res.status(200).json(data)
 }catch(err){
    res.status(404).json(err)

}}

export const getQsnid = async (req,res)=>{
    try{
        let data = await qsnBlock.findById(req.params.id);
        res.status(200).json(data);
    }catch(err){
        res.status(404).json(err)
    }
}

export const getqsn = async(req,res)=>{
    try{
        let data = await qsnBlock.find();
        res.status(200).json(data)
    }catch(err){
        res.status(404).json(err)
    }
}