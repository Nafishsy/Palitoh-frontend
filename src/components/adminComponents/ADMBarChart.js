import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
import Chart from 'react-apexcharts';
import TopBar from "./TopBar";

const AdmBarChart = () => {


    const[data,setData] = useState();


    useEffect(()=>{

        axiosConfig.get("Accounts/user/Count").then((rsp)=>{    
            setData(rsp.data)       

        debugger
        },(er)=>{
            debugger;
        })

    },[])

    return (
            <div>
                <TopBar/>
    

                <Chart
                type="bar"
                width={1500}
                height={700}

                series={[
                    {
                        name:"",
                        data:[data[0],data[1]]
                    }
                ]}

                options={{
                    title:{
                        text:"Number of users",
                        style:{fontSize:30},
                        align:'center'

                    },

                    colors:['#2A0944'],

                    theme:{mode:'light'},

                    xaxis:{
                        categories:["Customers", "Vets"],
                        title:{
                            text:" ",
                            style:{fontSize:12, color:"#2A0944"}
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