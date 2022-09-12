import React, { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'

const ItemListContainer=()=>{
    const [info,setInfo]= useState([]);

useEffect(()=>{
const dataCard=[
  {id:1,title:"Gorra Yankees",description:"Gorra camuflada de los NY Yankees",pictureUrl:"https://imagizer.imageshack.com/img924/4809/t72Pu2.jpg",price:2000, stock:15},
  {id:2,title:"Lentes de sol",description:"Lentes de sol modelo Urban Vulk",pictureUrl:"https://imagizer.imageshack.com/img923/2272/mSxmix.jpg",price:3000,stock:30},
  {id:3,title:"Reloj deportivo",description:"Reloj deportivo marca Jaguar",pictureUrl:"https://imagizer.imageshack.com/img922/4416/FClWyB.jpg",price:15000,stock:45},
  {id:4,title:"Remera urbana",description:"Remera urbana marca Marko",pictureUrl:"https://imagizer.imageshack.com/img923/8982/NE5i9h.jpg",price:2500, stock:90}
];
const getData = new Promise((resolve) => {
  setTimeout(() => {
      resolve(dataCard);
}, 2000);
});

  getData.then((el) => {
    setInfo(el);
});
}, []);

return(
    <div className="container">
      <ItemList info={info}/>
    </div>
)
}

export default ItemListContainer

