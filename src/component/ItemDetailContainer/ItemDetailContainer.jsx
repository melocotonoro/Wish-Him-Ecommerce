import React, { useState,useEffect } from 'react' 
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = ()=>{
const [detail, setDetail] = useState({})

useEffect(() => {
    const dataCrd=[
        {id:1,title:"Gorra Yankees",description:"Gorra camuflada de los NY Yankees.En el panel delantero se encuentra la sigla NY con bordado de color negro. La visera es curva y la costura es de color negro.El cierre trasero es regulable del tipo strapback que tiene una correa de tela con hebilla metálica.",
        pictureUrl:"https://imagizer.imageshack.com/img924/4809/t72Pu2.jpg",price:2000, stock:15},
        {id:2,title:"Lentes de sol",description:"Lentes de sol modelo Urban Vulk",pictureUrl:"https://imagizer.imageshack.com/img923/2272/mSxmix.jpg",price:3000,stock:30},
        {id:3,title:"Reloj deportivo",description:"Reloj deportivo marca Jaguar",pictureUrl:"https://imagizer.imageshack.com/img922/4416/FClWyB.jpg",price:15000,stock:45},
        {id:4,title:"Remera urbana",description:"Remera urbana marca Marko",pictureUrl:"https://imagizer.imageshack.com/img923/8982/NE5i9h.jpg",price:2500, stock:90}
];

const prom= new Promise(resolve =>{

//Busca un solo objeto del array de productos
const uniqueProd= dataCrd.find(el=> el.id === 1)

    setTimeout(() => {
        resolve(uniqueProd)
}, 2000);
});

    prom.then(el => setDetail(el)
    ).catch(()=>{
    console.log("Se ha producido un error")
})
},[]);

return(
    <div>
        <ItemDetail detail={detail}/>
    </div>
)

}

export default ItemDetailContainer