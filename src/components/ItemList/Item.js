import React from "react";
import './item.scss'
import { currencyFormatter } from "../../helpers/helpers";


export const Item =({id, name, description, img, price}) =>{
    return(
        <div key={id} className="card p-6">
            <p className="card-title">{name}</p>
            <h3>{currencyFormatter(price)}</h3>
            <img src={`/products/${img}`} alt={name}/>
        </div>   
    )
}