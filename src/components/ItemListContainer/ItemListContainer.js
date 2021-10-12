import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList/ItemList"
import { ItemSkeletor } from "./ItemSkeletor/ItemSkeletor"; 
import { pedirProductos } from "../../helpers/helpers";

export const ItemListContainer = () =>{
    const [items, setItems] = useState([])    
    const [loading, setLoading] = useState(false) 
    

    useEffect(() =>{
        setLoading(true)
        pedirProductos()
        .then((res)=>{ 
            setItems(res)
        })
        .catch((error)=>console.log(error))
        .finally(()=>{
            setLoading(false)
            console.log("Fin del llamado")
        })
    }, [])

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


