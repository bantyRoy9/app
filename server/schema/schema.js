import mongoose from "mongoose";

const Schema = mongoose.Schema({
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
});
 const questions = mongoose.model('questions', Schema)

 export default questions
