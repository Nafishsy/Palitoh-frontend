import {useParams} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import axiosConfig from '../publicComponents/axiosConfig';
import TopBar from './TopBar';

const UpdateFood=()=>{

    const {id} = useParams();  
    

    useEffect(()=>{
         
        debugger
        axiosConfig.get("Food/"+id).then((rsp)=>{

            setName(rsp.data.Name);
            setPrice(rsp.data.Price);
            setAmount(rsp.data.Amount);
            setStatus(rsp.data.Status);
            
            
            debugger

        },(er)=>{
            
        })

    },[])

    const [Name, setName] = useState('');
    const [Price, setPrice] = useState('');
    const [Status, setStatus] = useState('');
    const [Amount, setAmount] = useState('');
    const[errs,setErrs] = useState([]);


    const handleUpdate = (event) => {
        event.preventDefault();
        var data = {
          Id: id,
          Name: Name,
          Amount: Amount,
          Status: Status,
          Price: Price,
          ShopId: 1
      }
        debugger
        axiosConfig.post("Food/edit" , data).then(
          (succ) => {
            //setMsg(succ.data.msg);
            debugger;
            window.location.href="/shop/food/manage";

          },
          (err) => {
            debugger;
          }
        );
      };



    
    return(
        <div>
            <TopBar/>
            <form onSubmit={handleUpdate}>

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
        </div>
    )

}
export default UpdateFood;