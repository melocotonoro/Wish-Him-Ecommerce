import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContex";
import './cartWidget.css'

const CartWidget=()=>{
    
    const{countProp}=useContext(CartContext)
    let unid=countProp()

    return(
        <div className="containerCart">
            <Link to='/cart'>
                <img className="shopCart" src='./shoppingCart-01.png' alt="carrito compras" />
                <span className="count">{unid}</span>
            </Link>
        </div>

)
}


export default CartWidget 