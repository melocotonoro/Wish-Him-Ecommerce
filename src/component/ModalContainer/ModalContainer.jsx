import React, { useContext} from 'react'
import { CartContext } from '../CartContext/CartContex'
import Modal from '../Modal/Modal'
import "./ModalContainer.css"

const ModalContainer = ({stateModal,closeModal,orderId}) => {

    const{cart,totalPrice}=useContext(CartContext)

        const titleOrder=["Cantidad","Producto","Descripción","Total"]
    
            return (
                <div>
                    
                    <Modal stateModal={stateModal} closeModal={closeModal}>
                        {/* Estructura de la orden que se va a visualizar */}
                        <h2 className='titOrder'>Orden: {orderId}</h2>

                        <div className='cardModal'>
                                {
                                    titleOrder.map(e=> <b>{e}</b>)
                                }
                        </div>
                        {
                            cart.map(el=>(
                                <div className='cardModal'>
                                <b>{el.amount}</b>
                                <img src={el.pictureUrl} alt={el.title}/>
                                <p>{el.title}</p>
                                <b> $ {el.amount*el.price}</b>
                            </div>
                            ))
                        }
                            <div className='totalPrice'> Total a pagar $
                                {
                                    totalPrice()
                                }
                            </div>
                    </Modal>
                </div>
)
}

export default ModalContainer