import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { ItemDetailSkeletor } from './ItemDetailSkeletor/ItemDetailSkeletor'
import { UIContext } from "../../context/UIContext"
import { getFirestore } from "../../firebase/config";



export const ItemDetailContainer = () =>{
    const [item, setItem] = useState([])    
    const [itemExist, setItemExist] = useState(false)    
    const { loading, setLoading } = useContext(UIContext)
    const { itemId } = useParams()
    useEffect(() =>{
        setLoading(true)
        const db = getFirestore()
        const products = db.collection("products")
        const item = products.doc(itemId) 
        item.get()
        .then((doc) => {
            setItemExist(doc.exists)
            setItem({
                id: doc.id,
                ...doc.data()
            })            
        })
        .catch(err => console.log(err))
        .finally(()=>{
            setLoading(false)
        })

        
    }, [itemId, setLoading, setItemExist])
    return (
        <section className="m-5">
            <div className="container">
                {                
                    loading                    
                    ? <ItemDetailSkeletor/>
                    : <ItemDetail {...item} itemExist={itemExist} />              
                }
            </div>
        </section>
    )
}
