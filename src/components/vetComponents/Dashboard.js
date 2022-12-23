import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';

const Dashboard=()=>{

    const[data,setData] = useState([]);

    useEffect(()=>{
        //dhore nitesi id=2 login add korle then korbo
        debugger
        axiosConfig.get("vet/appointments/"+2).
        then((rsp)=>{
            
            setData(rsp.data);
            debugger
        },(er)=>{
            debugger
        })

    },[]);

    const [search, setSearch] = useState('');

    useEffect(()=>{
        const data = {Name:search,Id:2}
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
            const data = {StartDate:Stime,EndDate:Etime,Id:2} //Id 2 diye rakhsi login er por changes anbo
            debugger
            axiosConfig.post("vet/appointments/search/name",data).then
            ((rsp)=>{
                // setMovies(rsp.data)
                setData(rsp.data);
            debugger
            },(err)=>{
            debugger
            })
        }


    return(
        <div>
            Search: <input type="text" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} /> <br/><br/>

            <input type="datetime-local" id="startTime" name="startTime" onChange={(e)=>{setSTime(e.target.value)}}></input>
            To
            <input type="datetime-local" id="lastTime" name="lastTime" onChange={(e)=>{setETime(e.target.value)}}></input>

            <button onClick={(e)=>{searchByTime()}}>Request consultation</button>
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