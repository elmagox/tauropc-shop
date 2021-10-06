import React, { useEffect, useState } from "react";

const stock =[
    {
        id: 1,
        name: `Producto `,
        description: "Lorem ipsum",
        price:1500,
        img: "https://via.placeholder.com/220"
    },
    {
        id: 2,
        name: `Producto `,
        description: "Lorem ipsum",
        price:1500,
        img: "https://via.placeholder.com/220"
    },
    {
        id: 3,
        name: `Producto `,
        description: "Lorem ipsum",
        price:1500,
        img: "https://via.placeholder.com/220"
    },
    {
        id: 4,
        name: `Producto `,
        description: "Lorem ipsum",
        price:1500,
        img: "https://via.placeholder.com/220"
    },
    {
        id: 5,
        name: `Producto `,
        description: "Lorem ipsum",
        price:1500,
        img: "https://via.placeholder.com/220"
    }
]

export const ItemListContainer = ({greeting}) =>{
    const [items, setItems] = useState([])    
    const [loading, setLoading]= useState(false)
    
    const pedirProductos = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(stock)
            }, 2000)
        })
    }

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
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {
                loading ? 
                <h2>Cargando...</h2>:
                items.map(item => 
                    <>
                        <h1>{item.name}</h1>
                        <h1>{item.description}</h1>
                    </>
                )
            }
        </section>
    )
}


