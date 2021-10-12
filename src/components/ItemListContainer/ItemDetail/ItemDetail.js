import React from "react";

export const ItemDetail = ({item}) =>{
    return (
        <div>
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
            <h1>{item.img}</h1>
        </div>
    )
}