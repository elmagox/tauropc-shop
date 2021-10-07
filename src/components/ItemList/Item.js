import React from "react";
import './item.scss'

export const Item =({id, name, description, img, price}) =>{
    return(
        <div key={id} className="card p-3">
            <h4>{name}</h4>
            <h3>{description}</h3>
            <h3>${price}</h3>
            <img src={img} alt={name}/>
        </div>   
    )
}