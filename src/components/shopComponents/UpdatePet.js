import {useParams} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import axiosConfig from '../publicComponents/axiosConfig';

const UpdatePet=()=>{

    const {id} = useParams();  
    const[Name,setName] = useState([]);
    const[errs,setErrs] = useState([]);
    const[Type,setType] = useState([]);
    const[Age,setAge] = useState([]);
    const[Gender,setGender] = useState([]);
    const[Status,setStatus] = useState([]);

    useEffect(()=>{
         
        debugger
        axiosConfig.get("Pet/"+id).then((rsp)=>{

            setName(rsp.data.Name);
            setType(rsp.data.Type);
            setAge(rsp.data.Age);
            setGender(rsp.data.Gender);
            setStatus(rsp.data.Status);
            
            
            debugger

        },(er)=>{
            
        })

    },[])

    
    const handleUpdate = (event) => {
        event.preventDefault();
        var data = {
          Id: id,
          Name: Name,
          Type: Type,
          Age: Age,
          Gender: Gender,
          Status: Status,
          ShopId: 1,
        };
        debugger
        axiosConfig.post("Pet/edit" , data).then(
          (succ) => {
            //setMsg(succ.data.msg);
            debugger;
            window.location.href="/shop/pet/manage";

          },
          (err) => {
            debugger;
          }
        );
      };



    
    return(
        <div>

            <form onSubmit={handleUpdate}>

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
                    
                <input type="submit" value="Update"/>

            </form>
        </div>
    )

}
export default UpdatePet;