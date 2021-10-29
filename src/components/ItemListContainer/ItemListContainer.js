import React, { useContext, useEffect, useState } from "react";
import { ItemList } from "./ItemList/ItemList"
import { ItemSkeletor } from "./ItemSkeletor/ItemSkeletor"; 
import { UIContext } from "../../context/UIContext"
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/config";


export const ItemListContainer = () =>{
    const [items, setItems] = useState([])    
    const {loading, setLoading} = useContext(UIContext) 
    
    const {categoryId} = useParams()

    useEffect(() =>{
        
        setLoading(true)
        const db = getFirestore()
        const products = !categoryId 
        ? db.collection("products")
        : db.collection("products").where('category', '==', categoryId)

        products.get()
        .then((res) => {
            const newItems = 
            res.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}
            })
            setItems(newItems)
        })
        .catch((error)=>console.log(error))
        .finally(()=>{
            setLoading(false)
        })    
        
    }, [categoryId, setLoading])

    return (
        <section className="m-5">
            <div className="container">
                {
                    loading                    
                    ? <ItemSkeletor/>
                    : <ItemList items={items}/>              
                }
            </div>
        </section>
    )
}


