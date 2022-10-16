import React, { useState,useEffect } from 'react' 
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore,collection,getDoc,doc} from "firebase/firestore"
import Spinner from '../Spinner/Spinner';
import './ItemDetailContainer.css'

const ItemDetailContainer = ()=>{

    const [detail, setDetail] = useState({})
    const [loading,setLoading]=useState(true)
        
        const{id}=useParams();

            useEffect(() => {
                const db=getFirestore()
                    const dataCollections=collection(db,"productos")
                    const itemCollection=doc(dataCollections,id)

                    getDoc(itemCollection).then(res=>{
                        const object={id:res.id, ...res.data()}  

                            setDetail(object)
                            setLoading(false)
                    })
            },[id]);

        return(
                <div className='detailContainer'>
                    { loading
                        ? <Spinner/>
                        :<ItemDetail detail={detail}/>
                    }
                </div>
    )
}
export default ItemDetailContainer