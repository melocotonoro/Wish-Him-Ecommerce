import React from "react"
import { Link } from "react-router-dom"
import Buttons from "../Buttons/Buttons"
import './Item.css'

const Item=({id,title,pictureUrl,price,description})=>{

        return(
            <div className="card">
                <img src={pictureUrl} alt={title} />
                    <div>
                        <h4><b>{title}</b></h4>
                        <h5>{description}</h5>
                        <p>${price}</p>
                        
                        <Link to={`/item/${id}`}>
                            <Buttons data="Ver Detalles"/>
                        </Link>
                    </div>
            </div>
    )
}

export default Item