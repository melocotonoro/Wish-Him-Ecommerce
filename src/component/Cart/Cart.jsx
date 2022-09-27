import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContex";
import DetailCart from "../DetailCart/DetailCart";
import "./Cart.css"

const Cart = () => {
const{clear,cart,totalPrice}=useContext(CartContext)


const titleProd=["Producto","Precio","Cantidad","Precio Final",""]

    return (
    <div>
        { 
        (cart.length===0) 
            ?<div className="titleCart">
                <h1 >¡Ups,no tienes productos en tu carrito!</h1>
                <Link to={"/"}>Ir a Página principal</Link>
            </div>
            :<div>
                <h1 className="titleCart">Felicitaciones, agregaste al carrito!</h1>
                <div className="cartContainer">
                    <ul className="descriptionProd">
                        {
                            titleProd.map((element)=><li key={element}>{element}</li>)
                        }
                    </ul>
                    {
                    cart.map((obj)=>
                        <DetailCart key={obj.id} obj={obj}/>
                        )
                    }
                    <p>Total a pagar:{totalPrice()} </p>
                    <button className="btnClear" onClick={clear} >Vaciar Carrito</button>

                </div>
            </div>
        }

    </div>
)
}

export default Cart;