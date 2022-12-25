import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
import TopBar from "./TopBar";

const OldOrders=()=>{

    const[items,setItems] = useState([]);


    useEffect(()=>{
        localStorage.getItem("userId")
        debugger
        axiosConfig.get("palitoh/shop/history/"+localStorage.getItem("userId")).then((rsp)=>{
            setItems(rsp.data);
        },(er)=>{

        })

    },[]);


    return(
        <div>
            <TopBar/>
            <table border="1px solid" width='100%'>
                
                <th>Order Id</th>
                <th>Food</th>
                <th>Date</th>

                {
                    items.map((item)=>
                    
                    <tr>
                        <td key={item.Id}>{item.Id}</td>
                        <td>{item.FoodName}</td>
                        <td>{item.Date}</td>
                    </tr> 
                    )
                }

            </table>
        </div>
    )
}

export default OldOrders;