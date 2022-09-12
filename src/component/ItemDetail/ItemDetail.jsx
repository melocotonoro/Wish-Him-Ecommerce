import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail= ({detail})=>{

const{title,description,pictureUrl,price}=detail


return(
<div>
    <div className='containerDetail'>
        <div>
            <img src={pictureUrl} alt={title}></img>
            <h3>{"Precio $"+price}</h3>
        </div>
        <div>
        <div>
            <h2 className='titleDetail'>{title}</h2>
        </div>
            <h4>{description}</h4>

            {/* Componente botón agregar/quitar productos de stock */}
            <ItemCount stock={7} inicial={1} addItem={0}/> {/*Aca no me toma el valor de stock*/}
        </div>
    </div>
</div>
)
}

export default ItemDetail