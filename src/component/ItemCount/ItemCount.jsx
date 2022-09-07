import React from "react"
import { useState } from "react"
import './ItemCount.css'

const ItemCount=({stock, inicial,addItem})=>{

const[vInicial, setVInicial]=useState(inicial)
const[cantStock, setCantStock]=useState(stock)
const[add,setAdd]=useState(addItem)

const plus=()=>{
    if (vInicial<cantStock){setVInicial(vInicial+1)}
}

const substract=()=>{
    if (vInicial>0){setVInicial(vInicial-1)} 
}

const onAdd=()=>{
    if(vInicial<=cantStock){
        setCantStock(cantStock - vInicial) 
        setAdd(add+vInicial)
}
}
return(
    <div>
        <div className="containerBt">
            <button onClick={()=>{substract()}}>-</button>
            <span>{vInicial}</span>
            <button onClick={()=>{plus()}} >+</button>
        </div>
            <button onClick={()=>{onAdd()}} className="btnAdd">Agregar</button>
            <p className="stock">Quedan {cantStock} unidades</p>
            <p className="stock">Cantidad de productos seleccionados {add} </p>
    </div>
)
}


export default ItemCount