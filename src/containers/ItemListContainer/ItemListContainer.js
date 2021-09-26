import React from "react";


export const ItemListContainer  = ({greeting})=>{
    let styleCustom ={
        color:'gray',
        fontWeight:'bold'
    }

    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 style={styleCustom}>{greeting}</h1>
        </div>
    )
}