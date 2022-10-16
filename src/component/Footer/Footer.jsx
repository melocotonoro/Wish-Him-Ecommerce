import React from 'react'
import "./Footer.css"

const Footer = () => {
  
    return (
        <div className='footer'>
            <div className='containerLg'>
                <img src='https://res.cloudinary.com/ds7jaqjll/image/upload/v1664333333/Wish-Him/logo_zj6g8d.png' alt='logo' className='imgFooter'></img>
                <p>WISH HIM es una tienda de regalos dónde podrás encontrar el obsequio ideal para tu novio, tu marido, amante tu amigo o para la persona que desees. </p>
            </div>

            <div className='containerSocialMedia'>
                <img src='https://res.cloudinary.com/ds7jaqjll/image/upload/v1665880252/Wish-Him/instagram-01_xltxzc.png' alt='instagram'/>
                <img src='https://res.cloudinary.com/ds7jaqjll/image/upload/v1665879724/Wish-Him/facebook-01_nsj6be.png' alt='facebook'/>
                <img src='https://res.cloudinary.com/ds7jaqjll/image/upload/v1665879562/Wish-Him/twitter-01_qxhqrn.png' alt='twitter'/>
            </div>

            <div>
                <h2>Contacto</h2>
                <div className='containerContact'>
                    <img src='https://res.cloudinary.com/ds7jaqjll/image/upload/v1665880701/Wish-Him/adress-01_ozhjrq.png' alt='dirección'/>
                    <p>Córdoba 1234 - Córdoba Capital,Córdoba</p>
                </div>
                <div className='containerContact'>
                    <img src='https://res.cloudinary.com/ds7jaqjll/image/upload/v1665880401/Wish-Him/email-01_slctv5.png' alt='mail'/>
                    <p>wish-him@wishhim.com</p>
                </div>
                <div className='containerContact'>
                    <img src='https://res.cloudinary.com/ds7jaqjll/image/upload/v1665880252/Wish-Him/phone-01_gbuyvs.png' alt='teléfono'/>
                    <p>Teléfono:0351-153478952</p>
                </div>
                
            </div>
        </div>
)
}

export default Footer