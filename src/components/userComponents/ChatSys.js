import React,{useState,useEffect} from "react";
import axiosConfig from '../publicComponents/axiosConfig';
import '../Css_for_chat/msgBox.css';
import {useParams} from 'react-router-dom';
import TopBar from "./TopBar";

const ChatSys=()=>{

    const [chat,setChat] = useState([]);
    const [geseMessage,setGeseMessage] = useState(false);
    const [ashcheMessage,setAshcheMessage] = useState(false);
    
    const {id} = useParams();    
    const {v_id} = useParams();    
    useEffect(()=>{
        console.log(id);
        console.log(v_id);
        debugger
        axiosConfig.get("chat/oldmessages/"+id).then((rsp)=>{ 
        debugger     
        setChat(rsp.data);
        },(er)=>{

        })
    },[geseMessage, ashcheMessage]);

    const [message,setMessage] = useState("");
   
    
    const send=()=>{
        //pathabe
        const data={Text:message,CustomerId:0,ChatId:id,Time:new Date(),VetId:1};

        axiosConfig.post("customer/sendtext",data).
        then((succ)=>{
            setGeseMessage(!geseMessage)
            document.getElementById("textbox").value="";
            //console.log(succ.data) //ashche
            debugger
        },(erros)=>{
            debugger
        })

    }
    

    return(
        
        <div className="Chat">
            <TopBar/>
            <div class="message-box">
                <div class='bck'>
                <p>Another side</p>
                </div>    
            </div>
            
            <div class="sender-box">
                <div class='sender-bck'>
                <p>My Side</p>
                </div>    
            </div>

                <span>

                
                {
                    chat.map((ct)=>
                    <div>
                        
                        {
                        ct.CustomerId==0 ? //jodi a_id 0 hoy taile amar message
                            <div class="sender-box">
                                <div class='sender-bck'>
                                <p key={ct.id}> {ct.Text}  </p>
                                </div>
                            </div> 
                        : 
                        <div class="message-box">
                            <div class='bck'>
                            <p key={ct.id}> {ct.Text}  </p>
                            </div>    
                         </div>
                      }
                        
                    </div>

                    
                    )
                }

                </span>
                
            <div class="textbox">  
            <textarea onChange={(e)=>{setMessage(e.target.value)}} resize='none' ></textarea>
            <button onClick={(e) => { send(e.target.value) }}>Send</button>
            </div>

            

        </div>
        

    )
}

export default ChatSys;