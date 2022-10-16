import React from 'react'
import "./Modal.css"

const Modal = ({stateModal,closeModal,children}) => {
    
    return (
            <article className={`modal ${stateModal && "activeModal"}`}>
                <div className='modalContainer'>
                    <button className='modalClose' onClick={closeModal}>X</button>
                    {/* Muestra las propiedades children añadidas en ModalContainer */}
                    {children}
                </div>
            </article>
)
}

export default Modal
