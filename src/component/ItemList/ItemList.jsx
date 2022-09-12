import React from "react"
import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({info}) => {
    return (
        <div className="containerCard">
            {info.map(item => (
                <div key={item.id} className="col-md-4 py-3">
                    <Item title={item.title} pictureUrl={item.pictureUrl} price={item.price} description={item.description} stock={item.stock}/>
                </div>)
            )}
        </div>
    )
}

export default ItemList;




