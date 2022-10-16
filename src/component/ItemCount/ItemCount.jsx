import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import './ItemCount.css'

const ItemCount=({stock, inicial,onAdd})=>{

    const[vInicial, setVInicial]=useState(inicial)

        const plus=()=>{
            if (vInicial<stock)
            {
                setVInicial(vInicial+1)
            }
        }

        const substract=()=>{
            if (vInicial>0)
            {
                setVInicial(vInicial-1)
            }
        }

            useEffect(()=>
                {
                    setVInicial(parseInt(vInicial))
                },[vInicial])


return(
    <div className="contStock">
        <div className="containerBt">
            <button onClick={substract}>-</button>
            <span>{vInicial}</span>
            <button onClick={plus} >+</button>
        </div>
            <button disabled={stock<= 0} onClick={()=>{onAdd(vInicial)}} className="btnAdd">Agregar</button>
            <p className="stock">Cantidad de productos seleccionados {vInicial} </p>
            
    </div>
)
}


export default ItemCount
