import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
const VetList=()=>{

    const[vets,setVets] = useState([]);
    const[time,setTime] = useState([]);

    useEffect(()=>{
        axiosConfig.get("vets/all").then((rsp)=>{
            setVets(rsp.data);
        },(er)=>{

        })

    },[]);

    const ConsultationReq=(Id)=>{
        debugger
        axiosConfig.post("customer/appointment/request/vet",{ CustomerId: 1,VetId: Id,AppointmentDate:time}).then((rsp)=>{
            debugger
            alert("Consultation Hoise")
        },(er)=>{

        })
    }
    return(
        <div>
            <table border="1px solid" width='100%'>
                <th>Name</th>
                <th>Designation</th>
                <th>Location</th>
                <th>AppointmentFees</th>
                <th>Operations</th>

                {
                    vets.map((vet)=>
                    
                    <tr>

                        <td key={vet.Id}>{vet.Name}</td>
                        <td>{vet.Designation}</td>
                        <td>{vet.Location}</td>
                        <td>{vet.AppointmentFees}</td>
                        <td>
                            <input type="datetime-local" id="time" name="time" onSelect={(e)=>{setTime(e.target.value)}}></input>
                            <button onClick={(e)=>{ConsultationReq(vet.Id)}}>Request consultation</button>
                        </td>

                    </tr> 
                    )
                }
            </table>
        </div>
    )
}

export default VetList;