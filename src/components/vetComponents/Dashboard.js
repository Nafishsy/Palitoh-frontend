import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
import TopBar from "./TopBar";

const Dashboard=()=>{

    const[data,setData] = useState([]);

    useEffect(()=>{
        //dhore nitesi id=2 login add korle then korbo
        debugger
        axiosConfig.get("vet/appointments/"+localStorage.getItem("userId")).
        then((rsp)=>{
            
            setData(rsp.data);
            debugger
        },(er)=>{
            debugger
        })

    },[]);

    const [search, setSearch] = useState('');

    useEffect(()=>{
        
        const data = {Name:search,Id:localStorage.getItem("userId")}
        debugger
        axiosConfig.post("vet/appointments/search/name",data).then
        ((rsp)=>{
            // setMovies(rsp.data)
            setData(rsp.data);
        debugger
        },(err)=>{
        debugger
        })
        },[search])

        
        const [Stime, setSTime] = useState('');
        const [Etime, setETime] = useState('');

        const searchByTime=()=>{
            const data = {StartDate:Stime,EndDate:Etime,Id:localStorage.getItem("userId")} //Id 2 diye rakhsi login er por changes anbo
            debugger
            axiosConfig.post("vet/appointments/search/date",data).then
            ((rsp)=>{
                // setMovies(rsp.data)
                setData(rsp.data);
            debugger
            },(err)=>{
            debugger
            })
        }

        const [time, setTime] = useState(0);

        const currentTime = () => {
          var today = new Date().toLocaleString();
          setTime(today);
        };
        setTimeout(currentTime, 1000);

        useEffect(() => {
          currentTime();
        }, [time]);

    
    return(
        <div>
            <TopBar/>
            <time onLoad={currentTime} value={time}>{time}</time><br></br>
            Search: <input type="text" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} /> <br/><br/>

            <input type="datetime-local" id="startTime" name="startTime" onSelect={(e)=>{setSTime(e.target.value)}}></input>
            To
            <input type="datetime-local" id="lastTime" name="lastTime" onSelect={(e)=>{setETime(e.target.value)}}></input>

            <button onClick={(e)=>{searchByTime()}}>Search consultation</button>
            <table border="1px solid" width='100%'>
                
                <th>Name</th>
                <th>Time</th>
                <th>Operations</th>

                {
                    data.map((dr)=>
                    
                    <tr>

                        <td key={dr.Id}>{dr.Name}</td>
                        <td>{dr.AppointmentDate}</td>
                        <td></td>

                    </tr> 
                    )
                }
            </table>
        </div>
    )
}

export default Dashboard;