import React from "react";
import './ItemListContainer.css'

function ItemListContainer(props){
    return(
    <main className="main">
        <div>
            <h1 className="mainTxt">{props.greeting}</h1>
            <h2 className="mainTxt1">{props.texto}</h2>
        </div>
        <div className="mainBg">
        <img src="./mainBackground2.png"></img>
        </div>
    </main>
    )
}

export default ItemListContainer