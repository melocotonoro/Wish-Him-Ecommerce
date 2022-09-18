import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget ";
import './navBar.css'

function NavBar(){

let logo= "logo.png"

//Array con rutas para usar en los elementos del NavBar
const section = [{name:"Principal", root:"./"},
{name:"Ropa", root:"./category/ropa"},
{name:"Accesorios", root:"./category/accesorios"},
{name:"Search", root:"./"}];



return (            
    <section className="navBar">
        <div className="containerNV">
            <div className="lg">
                <img src={logo} alt="logo" className="logo"></img>
                <h4>WISH HIM</h4>
            </div>
            <ul className="itemsNv">
                {section.map((el) =><NavLink to={el.root} key={el.toString()} className="items"><li>{el.name}</li></NavLink> )}
            </ul>
            {/* Componente icono carrito*/}
            <CartWidget/>
        </div>
    </section>
)
}

export default NavBar

