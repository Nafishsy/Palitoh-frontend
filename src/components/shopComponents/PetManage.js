import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
import { Link } from "react-router-dom";

const PetManage=()=>{

    const[pets,setPets] = useState([]);

    useEffect(()=>{
        axiosConfig.get("palitoh/pets").then((rsp)=>{
            setPets(rsp.data);
            debugger
        },(er)=>{

        })

    },[]);

    const Delete=(id)=>{    
        debugger
            axiosConfig.post("Pet/delete",{Id:id}).
        then((succ)=>{
            //setMsg(succ.data.msg);
            debugger;
            window.location.reload();
        },(err)=>{
            debugger;
        })
    }
    
    const Update=(id)=>{    
        // debugger
        //     axiosConfig.post("admin/users/delete/"+id).
        // then((succ)=>{
        //     //setMsg(succ.data.msg);
        //     debugger;
        //     window.location.href="/Admin/home";
        // },(err)=>{
        //     debugger;
        // })
    }
    
    //for Creating
    const[Name,setName] = useState([]);
    const[errs,setErrs] = useState([]);
    const[Type,setType] = useState([]);
    const[Age,setAge] = useState([]);
    const[Gender,setGender] = useState([]);
    const[Status,setStatus] = useState([]);


    const handleAdd = (event) => {
      event.preventDefault();
      var data = {
        Name: Name,
        Type: Type,
        Age: Age,
        Gender: Gender,
        Status: Status,
        ShopId: 1,
      };
      debugger
      axiosConfig.post("Pet/add" , data).then(
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
            <h1>Pet List</h1>


            <form onSubmit={handleAdd}>

            Name: <input onChange={(e)=>{setName(e.target.value)}} size={30} type="text" name="name" value={Name}/> <br/>
                  <span>{errs.username? errs.username[0]:''}</span><br/>

            Type : 

                <input onChange={(e)=>{setType(e.target.value)}} size={30} type="text" name="name" value={Type}/> <br/>
                <span>{errs.username? errs.username[0]:''}</span><br/>

            Gender : 

                <input type="radio" name="gender" value='Male' onClick={(e)=>{setGender(e.target.value)}}/>Male
                <input type="radio" name="gender" value='Female'onClick={(e)=>{setGender(e.target.value)}}/>Female
                <br></br>
            
            Age:
                
                <input onChange={(e)=>{setAge(e.target.value)}} size={30} type="text" name="name" value={Age}/> <br/>
                <span>{errs.username? errs.username[0]:''}</span><br/>
            
            Status : 

                <input type="radio" name="Status" value='Available' onClick={(e)=>{setStatus(e.target.value)}}/>Available
                <input type="radio" name="Status" value='Requested' onClick={(e)=>{setStatus(e.target.value)}}/>Requested
                <br></br>
                    
                <input type="submit" value="Add to List"/>

            </form>

            <br></br>
            <br></br>


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
                        <td>
                            <button><Link to={`/shop/pet/update/${pet.Id}`}>Update info </Link></button>
                            <button onClick={(e)=>{Delete(pet.Id)}}>Delete</button>
                            
                        </td>

                    </tr> 
                    )
                }
            </table>
        </div>
    )
}

export default PetManage;