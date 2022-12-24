import axios from "axios";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Navigate } from "react-router-dom";
import axiosConfig from  './axiosConfig';

const Registration=()=>{
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCPassword] = useState("");
    const [type,setType] = useState("");
    const [email,setEmail] = useState("");
    const [errs,setErrs] = useState({});
    const [Profile,setProfile] = useState({});


    const handleReg=(event)=>{
        event.preventDefault();

        const data = {
          Name: name,
          UserName: username,
          Password: password,
          Type: type,
          Status: "Active",
        };
        //Account table C, Respective Table er C
        if (password === cpassword) {
          axiosConfig.post("Account/add", data).then(
            (succ) => {
              alert(succ.data.msg);
              window.location.href = "/";
              debugger;
            },
            (erros) => {
              setErrs(erros.response.data);
              console.log(errs);
              debugger;
            }
          );
        } else {
          errs.cpassword = "Passowrds don't match";
          debugger;
        }

    }
    return(
        <div>
            <center><h1>Palitoh</h1></center><br/> <hr/>

            <form onSubmit={handleReg}>

            Name: <input onChange={(e)=>{setName(e.target.value)}} size={30} type="text" name="name" value={name}/> <br/>
            <span>{errs.username? errs.username[0]:''}</span><br/>
            
            Username: <input onChange={(e)=>{setUsername(e.target.value)}} size={30} type="text" name="username" value={username}/> <br/>
                    <span>{errs.username? errs.username[0]:''}</span><br/>
            
            Type : 

                <input type="radio" name="genre" value='Customer' onClick={(e)=>{setType(e.target.value)}}/>Customer
                <input type="radio" name="genre" value='Vet'onClick={(e)=>{setType(e.target.value)}}/>Vet
                <input type="radio" name="genre" value='Shop'onClick={(e)=>{setType(e.target.value)}}/>Shop

                <span>{errs.genre? errs.genre[0]:''}</span><br/>
{/* 
            Profile Picture : 
            <input type="file" onChange={(e)=>{setProfile(e.target.files[0])}} name="banner"></input> <span>{errs.banner? errs.banner[0]:''}</span><br/>
            
                     */}
            Password: <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" value={password}/> <br/>
                    <span>{errs.password? errs.password[0]:''}</span><br/>
                    
            Confirm Password: <input onChange={(e)=>{setCPassword(e.target.value)}} type="password" name="password" value={cpassword}/> <br/>
                    <span>{errs.cpassword? errs.cpassword:''}</span><br/>
                    
                    <input type="submit" value="Registration"/>
            </form>
        </div>
    )
}

export default Registration;