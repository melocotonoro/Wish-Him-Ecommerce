import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget ";
import './navBar.css'

function NavBar(){

let logo= "logo.png"
// const section = ["Principal","Ropa","Accesorios","Search"];

return (            
    <section className="navBar">
        <div className="containerNV">
            <div className="lg">
                <img src={logo} alt="logo" className="logo"></img>
                <h4>WISH HIM</h4>
            </div>
            <ul className="itemsNv">
                <li key={1}><NavLink to={"./"} className="items">Principal</NavLink></li>
                <li key={2}><NavLink to={"./category/ropa"} className="items">Ropa</NavLink></li>
                <li key={3}><NavLink to={"./category/accesorios"} className="items">Accesorios</NavLink></li>
                <li key={4}><NavLink to={"./"} className="items">Search</NavLink></li>
                {/* {section.map((el) =><Link to={"/"} key={el.toString()}><li>{el}</li></Link> )} */}
            </ul>
            {/* Componente icono carrito*/}
            <CartWidget/>
        </div>
    </section>
)
}

export default NavBar