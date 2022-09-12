import React from "react"
import ItemCount from "../ItemCount/ItemCount";
import './Item.css'

const Item=({title,pictureUrl,price,description,stock})=>{

return(
    <div className="card">
        <img src={pictureUrl} alt={title} />
        <div >
            <h4><b>{title}</b></h4>
            <h5>{description}</h5>
            <p>${price}</p>
            <ItemCount stock={stock} inicial={1} addItem={0}/> 
        </div>
    </div>
)
}

export default Item