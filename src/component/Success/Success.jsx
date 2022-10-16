import React,{ useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContex'
import ModalContainer from '../ModalContainer/ModalContainer'
import "./Success.css"

const Success=({orderId})=>{


        const {clear}=useContext(CartContext)

        // Estado para controlar la apertura/cierre del modal
        const [stateModal,setStateModal]=useState(false)

        const openModal=()=>setStateModal(true)
        const closeModal=()=>setStateModal(false)

        return(
                <div className="bckOrder">
                        <h1 className='titleSuccess'>¡Felicitaciones, tu orden está concretada!</h1>
                        <p className='textSuccess'>Su orden es {orderId}</p>
                        
                        {/* Link creado para borrar el carrito y volver a la página principal  */}
                        <Link to={"/"} onClick={()=>clear()} >Volver a Página principal</Link>
                        
                        {/* Para abrir el modal de la orden  */}
                        <button  className='btnOrder' onClick={openModal}>Ver Orden</button>
                        <ModalContainer stateModal={stateModal} closeModal={closeModal} orderId={orderId}/>

                </div>
)
}

export default Success