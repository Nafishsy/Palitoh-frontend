import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
const PetList=()=>{

    const[pets,setPets] = useState([]);

    useEffect(()=>{
        axiosConfig.get("palitoh/pets").then((rsp)=>{
            setPets(rsp.data);
        },(er)=>{

        })

    },[]);

    const Adopt=(Id)=>{
        axiosConfig.get("api/palitoh/adoptions/"+Id+"/adopt").then((rsp)=>{
            alert("Hoise");
            debugger
        },(er)=>{
            alert("Hoise Na");
            debugger
        })
    }

    return(
        <div>
            <h1>Pet List</h1>
            <table border="1px solid" width='100%'>
                <th>Name</th>
                <th>Type</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Status</th>
                <th>Operations</th>

                {
                    pets.map((pet)=>
                    
                    <tr>

                        <td key={pet.Id}>{pet.Name}</td>
                        <td>{pet.Type}</td>
                        <td>{pet.Gender}</td>
                        <td>{pet.Age}</td>
                        <td>{pet.Status}</td>
                        <td><button onClick={(e)=>{Adopt(pet.Id)}}>Adopt</button></td>

                    </tr> 
                    )
                }
            </table>
        </div>
    )
}

export default PetList;