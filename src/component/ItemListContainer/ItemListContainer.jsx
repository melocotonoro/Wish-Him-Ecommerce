import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.css'

function ItemListContainer(){
return(
    <div>
      <ItemCount stock={20} inicial={1} addItem={0}/>
    </div>
)
}

export default ItemListContainer