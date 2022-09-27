import React from 'react'
import './Buttons.css'

const Buttons= ({data})=>{

    return(
        <button className='btns'>
            <span>{data}</span>
        </button>
    )
}

export default Buttons