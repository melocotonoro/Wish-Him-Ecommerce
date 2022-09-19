import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget ";
import './navBar.css'

function NavBar(){

let logo= "logo.png"

//Array con rutas para usar en los elementos del NavBar
const section = [{name:"Principal", root:"./"},
{id:"6",name:"Ropa", root:"./category/ropa"},
{id:"7",name:"Accesorios", root:"./category/accesorios"},
{id:"8",name:"Search", root:"./"}];



return (            
    <section className="navBar">
        <div className="containerNV">
            <div className="lg">
                <img src={logo} alt="logo" className="logo"></img>
                <h4>WISH HIM</h4>
            </div>
            <ul className="itemsNv">
                {section.map((el) =><NavLink to={el.root} key={el.name} className="items"><li>{el.name}</li></NavLink> )}
            </ul>
            {/* Componente icono carrito*/}
            <CartWidget/>
        </div>
    </section>
)
}

export default NavBar

