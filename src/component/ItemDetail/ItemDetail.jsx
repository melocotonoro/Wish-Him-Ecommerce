import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../Buttons/Buttons'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail=({detail})=>{
 
const [addCart,setaddCart]=useState(false)

const onAdd = (amount) => {
    setaddCart(true);
}
return(
    <div>
        <div className='containerDetail'>
            <div>
                <img src={detail.pictureUrl} alt="detalles productos" />
                    <h3>{detail.precio}</h3>
        </div>    
            <div>
                <div>   
                    <h2 className='titleDetail'>{detail.title}</h2>
                </div> 
                <h4>{detail.description}</h4>
                {/* Componente botón agregar/quitar productos de stock */}
                {
                addCart
                ? <Link to='/cart'><Buttons data={"Finalizar compra"}></Buttons></Link>
                : <ItemCount stock={30} inicial={1} onAdd={onAdd}/>
                }
                
            </div>    
        </div>    
    </div>
)
}

export default ItemDetail