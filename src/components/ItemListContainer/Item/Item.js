import React from "react";
import { currencyFormatter } from "../../../helpers/helpers"; 
import { Link } from "react-router-dom";
import './item.scss'



export const Item =({id, name, description, img, price}) =>{
    return(
        <Link to={`/item/${id}`}>
            <div key={id} className="card p-6">
                <p className="card-title">{name}</p>
                <h3>{currencyFormatter(price)}</h3>
                <img src={`/products/${img}`} alt={name}/>
            </div>
        </Link>   
    )
}