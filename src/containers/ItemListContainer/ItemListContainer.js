import React, { useEffect, useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { pedirProductos } from "../../helpers/pedirProductos";

export const ItemListContainer = () =>{
    const [items, setItems] = useState([])    
    const [loading, setLoading]= useState(false) 
    

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
        <section class=" m-5">
            <div className="container">
                {
                    loading 
                    ? <h2>Cargando...</h2>
                    : <ItemList items = {items}/>              
                }
            </div>
        </section>
    )
}


