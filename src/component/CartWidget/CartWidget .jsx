import React from "react";
import { Link } from "react-router-dom";
import './cartWidget.css'


function CartWidget(){
    return(
        <div className="containerCart">
            <Link to='/cart'>
                <img className="shopCart" src='./shoppingCart-01.png' alt="carrito compras" />
            </Link>
        </div>

)
}


export default CartWidget 