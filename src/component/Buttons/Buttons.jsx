import React from 'react'
import './Butons.css'

const Butons= ({data})=>{

return(
    <button className='btns'>
        <span data={data}/>
    </button>
)
}

export default Butons