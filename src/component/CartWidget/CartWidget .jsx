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
                        {/* Condicional que indica si el carrito no tiene productos no aparece, de lo contrario aparece */}
                        {
                            unid === 0
                                ? <div></div>
                                :<div>
                                    <img className="shopCart" src='https://res.cloudinary.com/ds7jaqjll/image/upload/v1664333333/Wish-Him/shoppingCart-01_c0m0as.png' alt="carrito compras" />
                                    <span className='count'>{unid}</span>
                                </div>
                        }
                    </Link>
                </div>
)
}


export default CartWidget 