import React from "react"
import { useState } from "react"
import './ItemCount.css'

const ItemCount=({stock, inicial,addItem})=>{

const[vInicial, setVInicial]=useState(inicial)
const[add,setAdd]=useState(addItem)

const plus=()=>{
    if (vInicial<stock){setVInicial(vInicial+1)}
}

const substract=()=>{
    if (vInicial>0){setVInicial(vInicial-1)} 
}

const onAdd=()=>{
    if(vInicial<=stock){
        stock-=vInicial
        setAdd(add+vInicial)
}
}
return(
    <div className="contStock">
        <div className="containerBt">
            <button onClick={()=>{substract()}}>-</button>
            <span>{vInicial}</span>
            <button onClick={()=>{plus()}} >+</button>
        </div>
            <button onClick={()=>{onAdd()}} className="btnAdd">Agregar</button>
            <p className="stock">Quedan {stock} unidades</p>
            <p className="stock">Cantidad de productos seleccionados {add} </p>
            
    </div>
)
}


export default ItemCount