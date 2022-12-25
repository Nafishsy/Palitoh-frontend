import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
import Chart from 'react-apexcharts';
import TopBar from "./TopBar";

const AdmBarChart = () => {


    const[data,setData] = useState();
    const[data1,setData1] = useState();
    const[data2,setData2] = useState();

    useEffect(()=>{

        axiosConfig.get("/Admin/UsersListCount").then((rsp)=>{    
            setData(rsp.data[0]+rsp.data[1])       
            setData1(rsp.data[0]);
            setData2(rsp.data[1]);
        debugger
        },(er)=>{
            debugger;
        })

    },[])

    return (
            <div>
                <TopBar/>
                <center>Total users: {data}</center>

                <Chart
                type="bar"
                width={1500}
                height={700}

                series={[
                    {
                        name:"",
                        data:[data1,data2]
                    }
                ]}

                options={{
                    title:{
                        text:"Customers VS SubAdmins",
                        style:{fontSize:30},
                        align:'center'

                    },

                    colors:['#2A0944'],

                    theme:{mode:'light'},

                    xaxis:{
                        categories:["Customers", "SubAdmins"],
                        title:{
                            text:"User types",
                            style:{fontSize:25, color:"#2A0944"}
                        },
                        labels:{
                            style:{fontSize:20, color:"#2A0944"}
                        }
                    },

                    yaxis:{
                        title:{
                            text:"Total number of users",
                            style:{fontSize:25, color:"#2A0944"}
                        },
                        labels:{
                            style:{fontSize:20, color:"#2A0944"}
                        }
                    }
                }}
                >

                </Chart>
                
            </div>
    )
}
export default AdmBarChart