import {axiosInstance} from "../api/index.js";
import axios from "axios";
// Register new user
export const RegisterUser = async(values) =>{
    try{
        const response = await axiosInstance.post("api/users/register",values);
        return response.data;
    }catch(err){
        console.log(err);

    }
}

export const LoginUser = async(values) =>{
    try{
        const response = await axiosInstance.post('/api/users/login',values)
        return response.data ;

    }catch(err){
        console.log(err);

    }

}

export const getCurrentUser = async(token)=>{
    try{
        const response = await axios.get("/api/users/get-current-user",{
            headers:{Authorization:`Bearer ${token}`}
        });
        return response.data;
    }
    catch(error){
        console.log(error);

    }
}