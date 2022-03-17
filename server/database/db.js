import mongoose from "mongoose";

const DbConnection = async ()=>{
    const URL ='mongodb+srv://onlineQuiz:12345@cluster0.okess.mongodb.net/onlineQuiz?retryWrites=true&w=majority'
    try{
        await mongoose.connect(URL);
        console.log('db is connect');

    }catch(error){
        console.log('db is not connected',error);
    }
}
export default DbConnection;