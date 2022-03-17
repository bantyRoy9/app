import mongoose from "mongoose";

const QsnBlock = new mongoose.Schema({
    subjectName:{
        type:String,
        required:true,
    
    },
    questions:{
        type:Object,
        question:{
            type:String,
            required: true,
    
        },
        questionNo:{
            type: Number,
            required: true,
        },
        option:{
            type:Object,
            required: true,
        }
    }

})

const qsnBlock = mongoose.model('QsnBlock', QsnBlock);

export default qsnBlock;