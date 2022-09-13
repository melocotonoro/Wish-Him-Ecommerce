import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail= ({detail})=>{


return(
    <div>
        <div className='containerDetail'>
            <div>
                <img src={detail.pictureUrl} alt={detail.title}></img>
                <h3>{"Precio $"+detail.price}</h3>
            </div>
            <div>
                <div>
                    <h2 className='titleDetail'>{detail.title}</h2>
                </div>
                <h4>{detail.description}</h4>
                {/* Componente botón agregar/quitar productos de stock */}
                <ItemCount stock={detail.stock} inicial={1} addItem={0}/> {/*Aca no me toma el valor de stock*/}
            </div>
        </div>
    </div>
)
}

export default ItemDetail