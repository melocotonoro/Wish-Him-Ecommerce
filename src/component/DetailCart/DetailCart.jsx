import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContex";
import "./DetailCart.css"

 const DetailCart=({obj})=>{

const{removeItem}=useContext(CartContext)

return(

<div  className="prodContainer" key={obj.id}>
    <div>
        <img src={obj.pictureUrl} alt="producto" />
    </div>
        <p>$ {obj.price}</p>
        <p>{obj.amount}</p>
        <p>$ {obj.amount*obj.price}</p>
        
        <div>
            <button className="btnRemove" onClick={()=>removeItem(obj.id)}>Eliminar</button>
        </div>
</div>

)
}

export default DetailCart 