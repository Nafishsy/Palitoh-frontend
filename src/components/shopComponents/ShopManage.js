import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Navigate } from "react-router-dom";
import axiosConfig from '../publicComponents/axiosConfig';
import TopBar from "./TopBar";

const ShopManage=()=>{

    const[data,setData] = useState([]);
    

    useEffect(()=>{
        
        axiosConfig.get("Foods").
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
        axiosConfig.post("Food/search/",data).then
        ((rsp)=>{
            // setMovies(rsp.data)
            setData(rsp.data);
            debugger
            
        },(err)=>{
        debugger
        })
        }
        ,[search])
    


        const Delete=(id)=>{    
            debugger
                axiosConfig.post("Food/delete",{Id:id}).
            then((succ)=>{
                //setMsg(succ.data.msg);
                debugger;
                window.location.reload();
            },(err)=>{
                debugger;
            })
        }

        const [Name, setName] = useState('');
        const [Price, setPrice] = useState('');
        const [Status, setStatus] = useState('');
        const [Amount, setAmount] = useState('');
        const [errs, setErrs] = useState('');
            
            
            const handleAdd = (event) => {
                event.preventDefault();
                var data = {
                  Name: Name,
                  Price: Price,
                  Amount: Amount,
                  Status: Status,
                  ShopId: 1,
                };

                debugger
                axiosConfig.post("Food/add" , data).then(
                  (succ) => {
                    //setMsg(succ.data.msg);
                    debugger;
                    window.location.reload();
                  },
                  (err) => {
                    debugger;
                  }
                );
              };
            
            
        
    return(
        <div>
            <TopBar/>
            <h1>Pet List</h1>


            <form onSubmit={handleAdd}>

            Name:   <input onChange={(e)=>{setName(e.target.value)}} size={30} type="text" name="name" value={Name}/> <br/>
                    <span>{errs.username? errs.username[0]:''}</span><br/>

            Amount:
        
                    <input onChange={(e)=>{setAmount(e.target.value)}} size={30} type="text" name="Amount" value={Amount}/> <br/>
                    <span>{errs.username? errs.username[0]:''}</span><br/>

            Status : 

                    <input type="radio" name="Status" value='Available' onClick={(e)=>{setStatus(e.target.value)}}/>Available
                    <input type="radio" name="Status" value='Requested' onClick={(e)=>{setStatus(e.target.value)}}/>Requested
                    <br></br>

            Price:
        
                    <input onChange={(e)=>{setPrice(e.target.value)}} size={30} type="text" name="price" value={Price}/> <br/>
                    <span>{errs.username? errs.username[0]:''}</span><br/>
            

                    
                    <input type="submit" value="Add to Item"/>

            </form>


            Search: <input type="text" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} /> <br/><br/>
            <table border="1px solid" width='100%'>
                
                <th>Name</th>
                <th>Ammount</th>
                <th>Status</th>
                <th>Price</th>
                <th>Operations</th>
                
                
                
                {
                    data.map((dr)=>
                    
                    <tr>

                        <td key={dr.Id}>{dr.Name}</td>
                        <td>{dr.Amount}</td>
                        <td>{dr.Status}</td>
                        <td>{dr.Price}</td>
                        <td>
                            <button><Link to={`/shop/food/update/${dr.Id}`}>Update </Link></button>
                            <button onClick={(e)=>{Delete(dr.Id)}}>Delete</button>
                        </td>

                    </tr> 
                    )
                }
            </table>
        </div>
    )
}

export default ShopManage;