import React, { useContext, useEffect, useState } from "react";
import { ItemList } from "./ItemList/ItemList"
import { ItemSkeletor } from "./ItemSkeletor/ItemSkeletor"; 
import { pedirProductos } from "../../helpers/helpers";
import { UIContext } from "../../context/UIContext"
import { useParams } from "react-router";


export const ItemListContainer = () =>{
    const [items, setItems] = useState([])    
    const {loading, setLoading} = useContext(UIContext) 
    
    const {categoryId} = useParams()

    useEffect(() =>{
        setLoading(true)
        pedirProductos()
        .then((res)=>{ 
            if(categoryId){
                setItems(res.filter(prod=>prod.category === categoryId))
            }else{
                setItems(res)
            }            
        })
        .catch((error)=>console.log(error))
        .finally(()=>{            
            setLoading(false)
            console.log("Fin del llamado")
        })
    }, [categoryId])

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


