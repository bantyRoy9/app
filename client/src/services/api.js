import axios from 'axios';

const URL = 'http://localhost:8000';

export const getQsns = async(params) => {
    try{
        let response = await axios.get(`${URL}/qsn${params}`)
        return response.data;
    }catch(err){
        console.log('error while getqsns api call', err);
    }
}

export const userCreate = async(user) =>{
    try{
       const data = await axios.post(`${URL}/sign`,user)
       return data
    }catch(err){
        console.log(err);
        // console.log('error while userCreate api',err);
    }
}
export const getUser = async () =>{
    try{
       let response= await axios.get(`${URL}/user`);
       return response.data;
    }catch(err){
        console.log('error while calling userLogin',err)
    }
}
export const getUserid = async (id) =>{
    try{
       let response= await axios.get(`${URL}/${id}`);
       return response.data;
    }catch(err){
        console.log('error while calling userLogin',err)
    }
}

export const getQsnBlock = async()=>{
    try{
        let response = await axios.get(`${URL}/getqsn`);
        return response.data;

    }catch(err){
        console.log('err',err);
    }
}
export const getQsnid = async (id)=>{
    try{
        let response = await axios.get(`${URL}/user/${id}`);
        return response.data

    }catch(err){
        console.log('err getsnid',err);
    }
}