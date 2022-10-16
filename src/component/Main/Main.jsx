import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import SectionUs from "../SectionUs/SectionUs";


const Main= ()=>{
    
    return(
            <div>
                {/* Componente principal de bienvenida*/}
                <SectionUs greeting="Bienvenidos a Whish Him" texto="E-commerce de regalos para ellos" />
                <ItemListContainer/>
            </div>
    )
}

export default Main