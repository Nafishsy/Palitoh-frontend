import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
import TopBar from "./TopBar";

const CreateAppinments=()=>{

    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [genre,setGenre] = useState("");
    const [banner,setBanner] = useState(null);
    const [movie,setMovie] = useState(null);

    const [errs,setErrs] = useState({});
    const [msg,setMsg] = useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        
        var data = new FormData();

        if(movie!=null)
        {
            data.append("movie",movie,banner.name);
        }
        if(banner!=null)
        {
            data.append("banner",banner,banner.name);
        }

        data.append("name",name);
 
        data.append("description",description);
        data.append("genre",genre);
        console.log(data);
        debugger
        axiosConfig.post("movie/upload",data).
        then((succ)=>{
            //setMsg(succ.data.msg);
            debugger
            window.location.href="/moviemanage";
        },(err)=>{
            setErrs(err.response.data);
            console.log(err);
            
        })
    }

    return(
        <div>
            <TopBar></TopBar>
            <form onSubmit={handleSubmit}>
            <h1>{msg}</h1>
            Patient Name: <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"/><span>{errs.name? errs.name[0]:''}</span><br/>
            Patient : <input value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text"/><span >{errs.description? errs.description[0]:''}</span><br/>
            </form>

        </div>
    )
}

export default CreateAppinments;