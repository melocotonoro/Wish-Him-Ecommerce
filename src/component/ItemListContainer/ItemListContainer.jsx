import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'

const ItemListContainer=()=>{

const [info,setInfo]= useState([]);

const{id}=useParams()

useEffect(()=>{
const dataCard=[
  {id:1,title:"Gorra Yankees",description:"Gorra camuflada de los NY Yankees",pictureUrl:"https://imagizer.imageshack.com/img924/4809/t72Pu2.jpg",price:2000, stock:15,category:"accesorios"},
  {id:2,title:"Lentes de sol",description:"Lentes de sol modelo Urban Vulk",pictureUrl:"https://imagizer.imageshack.com/img923/2272/mSxmix.jpg",price:3000,stock:30,category:"accesorios"},
  {id:3,title:"Reloj deportivo",description:"Reloj deportivo marca Jaguar",pictureUrl:"https://imagizer.imageshack.com/img922/4416/FClWyB.jpg",price:15000,stock:45,category:"accesorios"},
  {id:4,title:"Remera urbana",description:"Remera urbana marca Marko",pictureUrl:"https://imagizer.imageshack.com/img923/8982/NE5i9h.jpg",price:2500, stock:90,category:"ropa"}
];
const getData = new Promise((resolve) => {
  setTimeout(() => {
      resolve(dataCard);
}, 2000);
});

    if(id){
      getData.then(el => setInfo(el.filter(el=>el.category === id)));
      }
    else{
      getData.then(el=> setInfo(el))
}

      getData.catch(error=>{
      console.log("Es un error"+error)
});
}, [id]);

return(
    <div className="listContainer">

      {/* Componente contenedor de cards de productos*/}
      <ItemList info={info}/>
    </div>
)
}

export default ItemListContainer

