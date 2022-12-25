import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosConfig from '../publicComponents/axiosConfig';
import TopBar from "./TopBar";

const Appoinments=()=>{

    const[data,setData] = useState([]);
    const[time,setTime] = useState([]);
    const [flag,setFlag] = useState(false);

    useEffect(()=>{
        axiosConfig.get("customer/"+localStorage.getItem("userId")+"/Appoinments").then((rsp)=>{
            setData(rsp.data);
            debugger
        },(er)=>{
            debugger
        })

    },[]);


    // const Consult=(Id,vet)=>{
    //     window.location.href="/Customer/"+localStorage.getItem("userId")+"/Consult/"+Id;
    // }

    return(
        <div>
            <TopBar/>
            <table border="1px solid" width='100%'>
                
                <th>Name</th>
                <th>Time</th>
                <th>Operations</th>

                {
                    data.map((d)=>
                    
                    <tr>

                        <td key={d.Id}>{d.Name}</td>
                        <td>{d.AppointmentDate}</td>
                        
                        <td>
                            {/* <button onClick={(e)=>{Consult(d.Id)}}>Chat</button> */}
                            <button><Link to={`/Customer/${localStorage.getItem("userId")}/Vet/${d.VetId}/Consult/${d.Id}`}>Chat</Link></button>


                        </td>

                    </tr> 
                    )
                }
            </table>

        </div>
    )
}

export default Appoinments;