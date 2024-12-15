import React,{useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate,Link} from "react-router-dom";
import {getCurrentUser} from "../api/users";
import {SetUser} from "../redux/userslice";
import {message} from "antd";
import { ShowLoading,HideLoading } from '../redux/loaderSlice';
import { icons } from 'antd/es/image/PreviewGroup';
import Nav from '../components/Navigation/Nav';

const ProtectedRoute = ({children}) =>{
    const [user ,setUser]=useState(null);
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const getValidUser = async()=>{
        try{
            dispatch(ShowLoading());
            if(localStorage.getItem("token"))
                { 
                    const response = await getCurrentUser(localStorage.getItem('token'));
                    dispatch(SetUser(response.data));
                    setUser(response.data);
                    dispatch(HideLoading());
                }else{
                    navigate("/login");
                }
        }catch(error){
            dispatch(HideLoading());
            message.error(error.message)

        }
    };
    useEffect(()=>{
          getValidUser();
    },[])
    return (
        <>
            <Nav user={user}/>
            <div>{children}</div>
        </>
    )
}
export default ProtectedRoute;