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
                <img className="shopCart" src='https://imagizer.imageshack.com/img922/5160/zIVdD2.png' alt="carrito compras" />
                {/* Condicional para cambiar el estado del CardWidget*/}
                <span className={unid===0 ? 'cnt':'count'}>{unid}</span>

            </Link>
        </div>

)
}


export default CartWidget 