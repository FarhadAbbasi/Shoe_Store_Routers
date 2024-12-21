import React, { useState } from "react";
import {  Outlet, useNavigate, } from "react-router-dom";


function Admin() {
    return (
        <div>
            <h1> Admin Panel </h1>
            <Outlet />
        </div>
    );
}
export default Admin;



export function Login( {onlogin}) {
    const navigate = useNavigate();
    const [verifyName, setVerfyName] = useState(false) ;
    const [verifyPassword, setVerfyPassword] = useState(false) ;

    const searchName= (e)=> {
        const value= e.target.value
        if (value=== "Farhad" || value==="Bazil"){
            setVerfyName(true);
        } else {setVerfyName(false); }
    }
    const searchPassword= (e)=> {
        const value= e.target.value
        if (value==="Farhad" || value==="Bazil"){
            setVerfyPassword(true);
        } else {setVerfyPassword(false); }
    }


    const handlelogin = ()=> {
        if (verifyName && verifyPassword) { 
            navigate('/admin/panel') ;
            onlogin(true)  
        }
        else {navigate('/admin') ;
            onlogin(false)
        }
    } 
    console.log (onlogin) ;


    return (
        <div>
            <h1> Please Login !</h1> <br/>
            <input onChange={searchName} placeholder="Enter username here" ></input> <br />
            <input onChange={searchPassword} placeholder="Enter Password here" ></input> <br />

            <button onClick={() => handlelogin()}> Login </button>

        </div>
    );
}
