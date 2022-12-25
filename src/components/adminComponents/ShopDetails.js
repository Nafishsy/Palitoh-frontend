import axios from "axios";
import { useEffect, useState, useSyncExternalStore } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
import { Link } from "react-router-dom";
import TopBar from "./TopBar";


const ShopDetails=()=>{
    const[data,setData] = useState([]);
    
    useEffect(()=>{      
        
        debugger
        axiosConfig.get("Admin/Shop/Details").
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
                
                <th>Product Name</th>
                <th>Customer Name</th>
                <th>Purchase time</th>

                
                {
                    data.map((dr)=>
                    
                    <tr>

                        <td key={dr.Id}>{dr.FoodName}</td>
                        <td>{dr.CusName}</td>
                        <td>{dr.RequestItemTime}</td>

                    </tr> 
                    )
                }
            </table>
        </div>
    )

}

export default ShopDetails;