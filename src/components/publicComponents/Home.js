import axios from "axios";
import { useEffect, useState, useSyncExternalStore } from "react";
import axiosConfig from  './axiosConfig';
import { Link } from "react-router-dom";


const Home=()=>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errs,setErrs] = useState("");

    const handleLogin=(event)=>{
        event.preventDefault();
        const data={UserName:username,Password:password};
        debugger;
        axiosConfig.post("login",data).
        then((succ)=>{
            debugger
            var token=succ.data.Token.AccessToken;
            var user =succ.data.user;

            localStorage.setItem("_authToken",token);
            localStorage.setItem("username",succ.data.user.UserName);
            localStorage.setItem("userId",succ.data.user.Id);
            
            if(user.Type==="Admin"){                
                debugger
                window.location.href="/Admin/Home";
            }
            else if (user.Type==="Vet"){
                // alert(localStorage.getItem("userId"));
                window.location.href="/vet/dashboard";
            }
            else if (user.Type==="Customer"){
                window.location.href="/Customer/home";
            }
            else if (user.Type==="Shop"){
                window.location.href="/shop/pet/manage";
            }

        },(erros)=>{
            setErrs(erros.response.data);
            console.log(errs);
            debugger;
        })
        
    }

    return(
        <div>
            <center>
                <h1>Palitoh</h1>
            
            <br/> <hr/>
            <form onSubmit={handleLogin}>
                    Username: <input onChange={(e)=>{setUsername(e.target.value)}} size={30} type="text" name="username" value={username}/> <br/>
                    <span>{errs.username? errs.username[0]:''}</span><br/>
                    Password: <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" value={password}/> <br/>
                    <span>{errs.password? errs.password[0]:''}</span><br/>
                    <input type="submit" value="Login"/><br/><br/><hr/>
            </form>
            <span>{errs.msg? errs.msg:''}</span><br/>
            Don't have an account ? <button><Link to={`/registration`} >REGISTER </Link></button> <br/><br/>
            {/* <button><Link to={`/forgetpassword`} >Forgot Password ?</Link></button>  */}
            </center>
        </div>
    )

}

export default Home;