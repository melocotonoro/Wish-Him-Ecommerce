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
                        <img className="shopCart" src='https://res.cloudinary.com/ds7jaqjll/image/upload/v1664333333/Wish-Him/shoppingCart-01_c0m0as.png' alt="carrito compras" />
                        {/* Condicional para cambiar el estado del CardWidget*/}
                        <span className={unid===0 ? 'cnt':'count'}>{unid}</span>
                    </Link>
                </div>
)
}


export default CartWidget 