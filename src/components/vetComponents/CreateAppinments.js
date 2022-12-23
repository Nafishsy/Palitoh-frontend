import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';

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
    const [time,setTime] = useState(0);

    const currentTime=()=>{
        var today = new Date().toLocaleString();
        setTime(today);
    }
    setTimeout(currentTime, 1000)

    useEffect(()=>{
        currentTime();
        
    },[time]);

    return(
        <div>

            {/* 
            AppointmentDate
            CustomerId
            VetId
             */}
            <time onLoad={currentTime} value={time}>{time}</time>
            <form onSubmit={handleSubmit}>
            <h1>{msg}</h1>
            Patient Name: <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"/><span>{errs.name? errs.name[0]:''}</span><br/>
            Patient : <input value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text"/><span >{errs.description? errs.description[0]:''}</span><br/>


            Movie File: <input type="file" onChange={(e)=>{setMovie(e.target.files[0])}} name="movie"></input> <span>{errs.movie? errs.movie[0]:''} </span><br/>
            Banner: <input type="file" onChange={(e)=>{setBanner(e.target.files[0])}} name="banner"></input> <span>{errs.banner? errs.banner[0]:''}</span><br/>
            <input type="submit" value="Upload"/> 
        </form>
        </div>
    )
}

export default CreateAppinments;