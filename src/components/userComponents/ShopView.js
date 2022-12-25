import React, { useEffect, useState } from "react";
import axiosConfig from '../publicComponents/axiosConfig';
import TopBar from "./TopBar";

const ShopView=()=>{

    const[items,setItems] = useState([]);
    const[cart,setCart] = useState([]);

    useEffect(()=>{
        axiosConfig.get("palitoh/shop").then((rsp)=>{
            setItems(rsp.data);
        },(er)=>{

        })

    },[cart]);

    const Add=(item)=>{
        //dekhlam current cart
        const cart = sessionStorage.getItem('cart');

        const parsedObject = JSON.parse(cart);
        debugger
        if(parsedObject === null)
        {
            let c =[item];
            const jsonObject = JSON.stringify(c);
            sessionStorage.setItem("cart", jsonObject);   
            debugger;
        }
        else{
            parsedObject.push(item);
            const jsonObject = JSON.stringify(parsedObject);
            sessionStorage.setItem("cart", jsonObject); 
            debugger
        } 
        
    }

    const checkList=()=>{
        
        //dekhlam current cart er data dekhte parbo
        const cart = sessionStorage.getItem('cart');
        const parsedObject = JSON.parse(cart);
        setCart(parsedObject);
        debugger
    }

    const checkOut=()=>{
        debugger
        if (cart.length >0) {
            
            let mainCart=[];
            cart.forEach(ct => {
                mainCart.push(ct.Id);
            });

            debugger
            axiosConfig.post("palitoh/shop/cart",mainCart).then((rsp)=>{
                alert("hosise");
                ClearCart();
            },(er)=>{
                alert("hositese na");
                debugger
            })
        }
        else{
            alert("Kisu add e kori nai")
        }

    }
    const ClearCart=()=>{
        setCart("")
        sessionStorage.clear();
        alert("cart reseted")
    }

    return(
        <div>
            <TopBar/>

            <h1>Shop</h1>
            <table border="1px solid" width='100%'>
                <th>Name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Price</th>
                <th>Operations</th>

                {
                    items.map((item)=>
                    
                    <tr>

                        <td key={item.Id}>{item.Name}</td>
                        <td>{item.Amount}</td>
                        <td>{item.Status}</td>
                        <td>{item.Price}</td>
                        <td><button onClick={(e)=>{Add(item)}}>Add to cart</button></td>
                        
                        
                    </tr> 
                    
                    
                    )
                }
            </table>
            <button onClick={(e)=>{checkList()}}>Check Cart</button>
            <button onClick={(e)=>{checkOut()}}>Checkout</button>
            <button onClick={(e)=>{ClearCart()}}>ClearCart</button>
            <ul>
            {
                    cart.map((c)=>
                    
                    <ol>{c.Name}</ol>
                    
                    )
            }
            </ul>
        </div>
    )
}

export default ShopView;