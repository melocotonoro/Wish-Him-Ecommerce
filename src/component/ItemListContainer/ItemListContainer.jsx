import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {getFirestore,collection,getDocs,query,where} from "firebase/firestore"
import './ItemListContainer.css'

const ItemListContainer=()=>{

  const [info,setInfo]= useState([]);

    const{id}=useParams()

      useEffect(()=>{
        
        const dataBase= getFirestore()
        const dataCollection= collection(dataBase,"productos")

          const check= id ? query(dataCollection,where("category","==",id))
                          :dataCollection

              getDocs(check).then(el=>{
                  const arrayProd=el.docs.map(data=>({id:data.id, ...data.data()}))
                    setInfo(arrayProd)
                
                  }).catch(error=>console.log('error', error))
      }, [id]);

      return(
              <div className="listContainer">
                <ItemList info={info}/>
              </div>
)
}

export default ItemListContainer

