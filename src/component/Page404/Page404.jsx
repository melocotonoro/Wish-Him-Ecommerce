import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Page404.css"

const Page404=()=>{

    return(
            <div>
                <div className='container404'/>
                <NavLink className="actv" to={"/"}>Regresar a página pricipal</NavLink>
            </div>
    )
}

export default Page404