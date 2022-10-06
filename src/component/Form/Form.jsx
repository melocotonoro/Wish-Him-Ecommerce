import React,{useContext, useState} from 'react'
import { CartContext } from "../CartContext/CartContex";
import {getFirestore, addDoc, collection, serverTimestamp} from "firebase/firestore"
import "./Form.css"


const Form=({changeId})=>{
    const[name,setName]=useState("")
    const[lastName,setLastName]=useState("")
    const[mail,setMail]=useState("")
    const[phone,setPhone]=useState("")

    const{totalPrice,cart}=useContext(CartContext)

    // Funciones para guardar el nuevo valor ingresado en cada campo
        const handlerName=(e)=>setName(e.target.value)
        const handlerLastName=(e)=>setLastName(e.target.value)
        const handlerMail=(e)=>setMail(e.target.value)
        const handlerPhone=(e)=>setPhone(e.target.value)

        const handlerSummit=(e)=>{
            e.preventDefault();
                        const newOrder={
                                buyer:{
                                    name,
                                    lastName,
                                    mail,
                                    phone
                                },
                                items:cart.map((element) =>(
                                        {id:element.id,
                                        title:element.title,
                                        price:element.price
                                })),
                                date:serverTimestamp(),
                                total: totalPrice()
                        }

            const db=getFirestore();
            const orderRegister= collection(db,'orders');
            addDoc(orderRegister,newOrder).then((el)=>{
                changeId(el.id);
            })
                .catch(error=> console.log(error)); 
        }

    return(
        <div className='containerForm'>
            <form action='' onSubmit={handlerSummit}>
                <h2>Confirmación de compra</h2>
                    <div className='containerLabel'>
                        <label htmlFor="nombre">Nombre</label>
                        <label htmlFor="apellido">Apellido</label>
                    </div>
                    <div>
                        <input type="text" name='nombre' placeholder='Nombre' value={name} className="input" onChange={handlerName} />
                        <input type="text" name="apellido" placeholder='Apellido' value={lastName} className="input" onChange={handlerLastName} />
                    </div>
                    <div>
                        <span className='span'>Datos correctos </span>
                        <span className='span'>Datos correctos </span>
                    </div>
                    <div className='containerLabel'>
                        <label htmlFor="mail">Mail</label>
                    </div>
                    <div>
                        <input type="mail" name="mail" placeholder='Mail' value={mail} className='containerInput'onChange={handlerMail} />
                    </div>
                        <span className='alert'>Datos correctos </span>
                    <div className='containerLabel'>
                        <label htmlFor="telefono">Teléfono</label>
                    </div>
                    <div>
                        <input type="number" name="nombre" placeholder='Número de teléfono' value={phone} className='containerInput'onChange={handlerPhone} />
                    </div>
                        <span className='alert'>Datos correctos </span>
                    
                    {/* Si los campos no están completos el botón esta en estado disabled */}
                    <div>
                        <button className='btnConfirm' disabled={!name|| !lastName || !mail|| !phone}>Confirmar</button>
                    </div>
            </form>
        </div>
    )
}

export default Form
