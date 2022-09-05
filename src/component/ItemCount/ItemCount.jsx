import React from "react"
import { useState } from "react"
import './ItemCount.css'

const ItemCount=({stock, inicial,onAdd})=>{

const[vInicial, setVInicial]=useState(inicial)
const[cantStock, setCantStock]=useState(stock)
const[add,setAdd]=useState(onAdd)

const plus=()=>{
if (vInicial<=cantStock){
    setVInicial(vInicial+1)
}
}

const substract=()=>{
if (vInicial>0){
    setVInicial(vInicial-1)
} 
}

const itemsAdd=()=>{
  if(vInicial<=cantStock){
    setCantStock(cantStock - vInicial) 
    setAdd(add+vInicial)
  }

}
return(
    <div>
        <div className="containerBt">
            <button onClick={()=>{plus()}}>+</button>
            <span>{vInicial}</span>
            <button onClick={()=>{substract()}} >-</button>
        </div>
            <button onClick={()=>{itemsAdd()}} className="btnAdd">Agregar</button>
            <p className="stock">Quedan {cantStock} unidades</p>
            <p className="stock">Cantidad de productos seleccionados {add} </p>
    </div>
)
}


export default ItemCount