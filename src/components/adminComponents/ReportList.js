import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Navigate } from "react-router-dom";
import axiosConfig from '../publicComponents/axiosConfig';

const ReportList=()=>{

    const[data,setData] = useState([]);
    

    useEffect(()=>{
        //dhore nitesi id=2 login add korle then korbo
        
        let id = localStorage.getItem('userId');
        debugger
        axiosConfig.get("Reports").
        then((rsp)=>{
            setData(rsp.data);
            debugger
        },(er)=>{
            debugger
        })

    },[]);

    const [search, setSearch] = useState('');

    useEffect(()=>{
        const data = {Name:search}
        debugger
        axiosConfig.post("admin/reports/search/",data).then
        ((rsp)=>{
            // setMovies(rsp.data)
            setData(rsp.data);
            debugger
            
        },(err)=>{
        debugger
        })
        },[search])
    
    return(
        <div>
            Search: <input type="text" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} /> <br/><br/>
            <table border="1px solid" width='100%'>
                
                <th>Name</th>
                <th>Issue</th>

                {
                    data.map((dr)=>
            
                    <tr>

                        <td key={dr.Id}>{dr.Name}</td>
                        <td>{dr.d.Description}</td>

                    </tr> 
                    )
                }
            </table>
        </div>
    )
}

export default ReportList;