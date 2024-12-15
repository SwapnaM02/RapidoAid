import React, { useEffect,useState } from 'react';
import "./nav.css";
import {Link,useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Nav = ({user}) => {
    const [tabs,setTabs]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
            if(user.role == 'admin'){
                const adminTabs=["hospital","ambulance"];
                setTabs(adminTabs);
            }
            else if(user.role == 'hospital'){
                const hospitalTabs=["Home","Bookings","Account"];
                setTabs(hospitalTabs);
            }
            else if(user.role == 'ambulance'){
                const ambulanceTabs=["Home","Trips","Profile"];
                setTabs(ambulanceTabs);
            }
            else {
                const userTabs=["Home","Hospital","Ambulance"];
                setTabs(userTabs);
            }

        }
    },[user]);
    
    return (
        <>
        <div className="nav-container">
            <h1>RapidAid</h1>
            <div className='tabs-container'>
                {
                    tabs.map((tab)=>{
                        return <h3>{tab}</h3>
                    })
                }
                
            </div>
        <div className='nav-logout'>
            <button class="btn-red" >Emergency </button>
            <div>
                <Link to="/login" onClick={()=>{
                            localStorage.removeItem("token");}}>
                        <i class="fa-solid fa-right-from-bracket" style={{fontSize:"2.5rem", color:"black",margin:"5px 0 0 0"}} ></i>
                </Link>
            </div>
        </div>
    </div>
</>
    )
}

export default Nav;
