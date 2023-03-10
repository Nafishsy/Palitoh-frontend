import React,{useState,useEffect} from "react";
import axiosConfig from '../publicComponents/axiosConfig';

import '../Css_for_chat/msgBox.css';
import {useParams} from 'react-router-dom';
import TopBar from "./TopBar";

const ChatSysVet=()=>{

    const [chat,setChat] = useState([]);
    const [geseMessage,setGeseMessage] = useState(false);
    const [ashcheMessage,setAshcheMessage] = useState(false);
    
    const {id} = useParams();    
    const {c_id} = useParams();    
    useEffect(()=>{
        console.log(id);
        console.log(c_id);
        debugger
        axiosConfig.get("chat/oldmessages/"+id).then((rsp)=>{ 
        debugger     
        setChat(rsp.data);
        },(er)=>{

        })
    },);

    const [message,setMessage] = useState("");
   
    
    const send=()=>{
        
        //pathabe
        const data={Text:message,CustomerId:1,ChatId:id,Time:new Date(),VetId:0};
        debugger
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
                        ct.CustomerId==1 ? //jodi a_id 0 hoy taile amar message
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
            <textarea onChange={(e)=>{setMessage(e.target.value)}} resize='none' id="textbox"></textarea>
            <button onClick={(e) => { send(e.target.value) }}>Send</button>
            </div>

            

        </div>
        

    )
}

export default ChatSysVet;