import React from "react";
import CartWidget from "../CartWidget/CartWidget ";

import './navBar.css'

function NavBar(){

let logo= "logo.png"
const section = ["Home","Categories","Contact","Search"];

return (            
    <section className="navBar">
        <div className="containerNV">
            <div className="lg">
                <img src={logo} alt="logo" className="logo"></img>
                <h4>WISH HIM</h4>
            </div>
            <ul className="itemsNv">
                {section.map((el) =><a href="#" key={el.toString()}><li>{el}</li></a> )}
            </ul>
        
        {/* Componente icono carrito*/}
        <CartWidget/>
        </div>
    </section>
)
}

export default NavBar