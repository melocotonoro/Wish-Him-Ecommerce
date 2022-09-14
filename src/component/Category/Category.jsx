import React from 'react'
import './Category.css'
import Buttons from "../Buttons/Buttons"
import { Link } from 'react-router-dom'

const Category=()=>{
    return(
        <div>
            <div className='containerCategory'>
                <Link to={"./category"}>
                    <Buttons data="Ropa"></Buttons>
                </Link>
                <Link to={"./category"}>
                    <Buttons data="Accesorios"></Buttons>
                </Link>
            </div>
        </div>
)        
}

export default Category