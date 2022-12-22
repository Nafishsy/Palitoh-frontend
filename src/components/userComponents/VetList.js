import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
const VetList=()=>{

    const[vets,setVets] = useState([]);

    useEffect(()=>{
        axiosConfig.get("vets/all").then((rsp)=>{
            setVets(rsp.data);
        },(er)=>{

        })

    },[]);

    return(
        <div>
            <table border="1px solid" width='100%'>
                <th>Name</th>
                <th>Designation</th>
                <th>Location</th>
                <th>AppointmentFees</th>

                {
                    vets.map((vet)=>
                    
                    <tr>
                        <td key={vet.Id}>{vet.Name}</td>
                        <td>{vet.Designation}</td>
                        <td>{vet.Location}</td>
                        <td>{vet.AppointmentFees}</td>
                    </tr> 
                    )
                }
            </table>
        </div>
    )
}

export default VetList;