import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
import TopBar from "./TopBar";
const VetList=()=>{

    const[vets,setVets] = useState([]);
    const[time,setTime] = useState([]);
    const [flag,setFlag] = useState(false);
    const [data,setData] = useState([]);

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

    const ChangeFLG=()=>{
        setFlag(true)
        //id == 1 dhore nisi eta session ba local storage e raikha dibo login er pore
        axiosConfig.get("customer/appointment/history/"+1).then((rsp)=>{
            setData(rsp.data)
            debugger
            alert("Past consualtation")
        },(er)=>{

        })
    }

    const Report=(Id)=>{
        let a ={ AccountId: Id,Description : "Hature Doctor"};
        debugger
        axiosConfig.post("palitoh/vets/report/",a).
        then((rsp)=>{
            alert("Ban dibo ne Admin")
            debugger
        },(er)=>{
            alert("Pay nai report")
            
        })
    }

    return(
        <div>
            <TopBar/>
            <h1>HealthCare</h1>
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

            <button onClick={ChangeFLG}>Past History</button>

            <div>
                        {
                            flag
                                ? 
                                <div>
                                    <table border="1px solid" width='100%'>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Operation</th>

                                        {
                                        data.map((dt)=>
                                        <tr>
                                            <td key={dt.Id}>{dt.Name}</td>
                                            <td >{dt.AppointmentDate}</td>
                                            <td ><button onClick={(e)=>{Report(dt.Id)}}>Report</button></td>
                                        </tr> 
                                        )
                                        }
                                        
                                    </table>
                                </div>
                                : ""
                        }
            </div>

        </div>
    )
}

export default VetList;