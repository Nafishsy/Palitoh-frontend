import axios from "axios";
import { useEffect, useState, useSyncExternalStore } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
import { Link } from "react-router-dom";
import TopBar from "./TopBar";


const Transaction=()=>{
    const[data,setData] = useState([]);
    
    useEffect(()=>{      
        
        debugger
        axiosConfig.get("Admin/Consultations/Details").
        then((rsp)=>{
            setData(rsp.data);
            debugger
        },(er)=>{
            debugger
        })

    },[]);

    return(
        <div>
            <TopBar/>
            <table border="1px solid" width='100%'>
                
                <th>Vet Name</th>
                <th>Patient Name</th>
                <th>Consultation Date</th>

                
                {
                    data.map((dr)=>
                    
                    <tr>

                        <td key={dr.Id}>{dr.VetName}</td>
                        <td>{dr.CusName}</td>
                        <td>{dr.AppointmentDate}</td>

                    </tr> 
                    )
                }
            </table>
        </div>
    )

}

export default Transaction;