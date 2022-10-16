import React from "react";

import './SectionUs.css'

const SectionUs=(props)=>{

    return(
            <div className="presentation">
                <div>
                    <h1 className="presentTxt">{props.greeting}</h1>
                    <h2 className="presentTxt1">{props.texto}</h2>
                </div>
                <div className="presentBg">
                    <img src="./presentBackground2.png" alt="foto de presentacion"/>
                </div>
            </div>
    )
}

export default SectionUs