import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Navigate } from "react-router-dom";
import axiosConfig from '../publicComponents/axiosConfig';

const ShopManage=()=>{

    const[data,setData] = useState([]);
    

    useEffect(()=>{
        //dhore nitesi id=2 login add korle then korbo
        
        let id = localStorage.getItem('userId');
        debugger
        axiosConfig.get("Accounts").
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
        axiosConfig.post("admin/accounts/search/",data).then
        ((rsp)=>{
            // setMovies(rsp.data)
            setData(rsp.data);
            debugger
            
        },(err)=>{
        debugger
        })
        },[search])
    


        const Delete=(id)=>{    
            debugger
                axiosConfig.post("admin/users/delete/"+id).
            then((succ)=>{
                //setMsg(succ.data.msg);
                debugger;
                window.location.href="/shop/pet/manage";
            },(err)=>{
                debugger;
            })
            

            
        }
    return(
        <div>
            Search: <input type="text" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} /> <br/><br/>
            <table border="1px solid" width='100%'>
                
                <th>Name</th>
                <th>User Name</th>
                <th>Status</th>
                <th>Role</th>
                <th>Operations</th>
                
                
                
                {
                    data.map((dr)=>
                    
                    <tr>

                        <td key={dr.Id}>{dr.Name}</td>
                        <td>{dr.UserName}</td>
                        <td>{dr.Status}</td>
                        <td>{dr.Type}</td>
                        <td>
                            <button><Link to={`/user/edit/${dr.Id}`}>Update info </Link></button>
                            <button onClick={(e)=>{Delete(dr.Id)}}>Ban</button>
                        </td>

                    </tr> 
                    )
                }
            </table>
        </div>
    )
}

export default ShopManage;