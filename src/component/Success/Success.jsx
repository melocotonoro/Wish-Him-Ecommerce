import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContex'
import "./Success.css"

const Success=({orderId})=>{

        const {clear}=useContext(CartContext)

        return(
                <div className="bckOrder">
                        <h1 className='titleSuccess'>¡Felicitaciones, tu orden está concretada!</h1>
                        <p className='textSuccess'>Su orden es {orderId}</p>
                        {/* Link creado para borrar el carrito y volver a la página principal  */}
                        <Link to={"/"} onClick={()=>clear()} >Volver a Página principal</Link>
                </div>
)
}

export default Success