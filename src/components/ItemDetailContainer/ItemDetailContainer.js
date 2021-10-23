import React, { useEffect, useState, useContext } from "react";
import { pedirProductos } from "../../helpers/helpers";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { ItemDetailSkeletor } from './ItemDetailSkeletor/ItemDetailSkeletor'
import { UIContext } from "../../context/UIContext"



export const ItemDetailContainer = () =>{
    const [item, setItem] = useState([])    
    const { loading, setLoading } = useContext(UIContext) 
    const { itemId } = useParams()
    useEffect(() =>{
        setLoading(true)
        pedirProductos()
        .then((res)=>{ 
            if(itemId){
                setItem(res.find(prod => prod.id === Number(itemId)))
            }else{
                console.log("Error")
            }            
        })
        .catch((error)=>console.log(error))
        .finally(()=>{            
            setLoading(false)
        })
    }, [itemId, setLoading])

    return (
        <section className="m-5">
            <div className="container">
                {
                    loading                    
                    ? <ItemDetailSkeletor/>
                    : <ItemDetail {...item}/>              
                }
            </div>
        </section>
    )
}
