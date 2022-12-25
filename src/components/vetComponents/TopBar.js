import React from "react";
import { Link } from "react-router-dom";
import axiosConfig from '../publicComponents/axiosConfig';
const TopBar=()=>{

    const LogOut=()=>{

        var data = {Id:localStorage.getItem("userId")}
        debugger
        axiosConfig.post("logout",data).
        then((succ)=>{  
            // alert(succ.data.msg)
            localStorage.clear();
            window.location.href="/";
            debugger
        },(erros)=>{
            debugger
        })
        
    }

    return(
        <div>
            <Link to="/vet/dashboard">Home</Link> &nbsp;&nbsp;
            <Link to="/vet/create/appointment">Consultation</Link> &nbsp;&nbsp;
            <button onClick={(e)=>{LogOut()}} >Logout</button> 
        </div>
    )
}

export default TopBar;