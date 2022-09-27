import React, { useState,useEffect } from 'react' 
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

import './ItemDetailContainer.css'

const ItemDetailContainer = ()=>{
const [detail, setDetail] = useState({})
const [loading,setLoading]=useState(true)
const{id}=useParams();

useEffect(() => {
    const dataCrd=[
        {id:"1",title:"Gorra Yankees",description:"Gorra camuflada de los NY Yankees",pictureUrl:"https://imagizer.imageshack.com/img924/4809/t72Pu2.jpg",price:2000, stock:15,category:"accesorios"},
        {id:"2",title:"Lentes de sol",description:"Lentes de sol modelo Urban Vulk",pictureUrl:"https://imagizer.imageshack.com/img923/2272/mSxmix.jpg",price:3000,stock:30,category:"accesorios"},
        {id:"3",title:"Reloj deportivo",description:"Reloj deportivo marca Jaguar",pictureUrl:"https://imagizer.imageshack.com/img922/4416/FClWyB.jpg",price:15000,stock:45,category:"accesorios"},
        {id:"4",title:"Remera urbana",description:"Remera urbana marca Marko",pictureUrl:"https://imagizer.imageshack.com/img923/8982/NE5i9h.jpg",price:2500, stock:90,category:"ropa"}
];

const getItem= new Promise(resolve =>{

// //Busca un solo objeto del array de productos
// const uniqueProd=()=> dataCrd.find(el=> el.id === id)

setTimeout(() => {
    setLoading(false)
    resolve(dataCrd)
}, 2000);
});

getItem.then(el => setDetail(el.find(prod=>prod.id === id)),

setLoading(true)
)


.catch(()=>{
    console.log("Se ha producido un error")
})

},[id]);

return(
<div className='detailContainer'>

    { loading
        ? <Spinner/>
    // Componente card de productos con descripcion
        :<ItemDetail detail={detail}/>
    }

</div>
    
)
}
export default ItemDetailContainer