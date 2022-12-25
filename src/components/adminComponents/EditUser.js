import {useParams} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import axiosConfig from '../publicComponents/axiosConfig';
import TopBar from './TopBar';

const EditUser=()=>{

    const {id} = useParams();  
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [type,setType] = useState("");
    const [email,setEmail] = useState("");
    const [errs,setErrs] = useState({});
    const [Profile,setProfile] = useState({});

    useEffect(()=>{
         
        debugger
        axiosConfig.get("Account/"+id).then((rsp)=>{
            setName(rsp.data.Name);
            setUsername(rsp.data.UserName);
            setType(rsp.data.Type);
            
            debugger

        },(er)=>{
            
        })

    },[])

    
    const handleSubmit=(event)=>{
        event.preventDefault();
        var data = {
            "Name": name,
            "UserName": username,
            "Type": type,
            "Id" :id,
        };
            
        debugger
        axiosConfig.post("Account/edit",data).
        then((succ)=>{
            //setMsg(succ.data.msg);
            debugger;            
            window.location.href="/admin/home";
        },(err)=>{
            setErrs(err.response.data);
            debugger
        })
    }



    
    return(
        <div>
            <TopBar/>
            <form onSubmit={handleSubmit}>

            Name: <input onChange={(e)=>{setName(e.target.value)}} size={30} type="text" name="name" value={name}/> <br/>
            <span>{errs.username? errs.username[0]:''}</span><br/>
            
            Username: <input onChange={(e)=>{setUsername(e.target.value)}} size={30} type="text" name="username" value={username}/> <br/>
                    <span>{errs.username? errs.username[0]:''}</span><br/>
            
            Type : 

                <input type="radio" name="genre" value='Customer' onClick={(e)=>{setType(e.target.value)}}/>Customer
                <input type="radio" name="genre" value='Vet'onClick={(e)=>{setType(e.target.value)}}/>Vet
                <input type="radio" name="genre" value='Shop'onClick={(e)=>{setType(e.target.value)}}/>Shop

                <span>{errs.genre? errs.genre[0]:''}</span><br/>
                    
                    <input type="submit" value="Update"/>
            </form>
        </div>
    )

}
export default EditUser;