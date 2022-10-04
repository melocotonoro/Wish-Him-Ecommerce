import React from "react";
import { useState } from "react";
import Form from "../Form/Form";
import Success from "../Success/Success";

const Checkout=()=>{
        const[orderId,setOrderId]= useState("")

        const changeId=(numberOrder)=>{setOrderId(numberOrder)} 

            return(
                    orderId
                            ? <Success orderId={orderId}></Success>
                            :<div><Form changeId={changeId}/></div>
            )
}

export default Checkout