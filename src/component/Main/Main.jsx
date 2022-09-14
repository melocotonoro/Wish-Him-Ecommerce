import React from "react";
import Category from "../Category/Category";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import SectionUs from "../SectionUs/SectionUs";

const Main= ()=>{
return(
        <div>
            {/* Componente principal de bienvenida*/}
            <SectionUs greeting="Bienvenidos a Whish Him" texto="E-commerce de regalos para ellos" />

            {/* Componente que contiene botones para seleccionar categorias de productos*/}
            <Category/>
            
            <ItemListContainer/>
        </div>
)
}

export default Main