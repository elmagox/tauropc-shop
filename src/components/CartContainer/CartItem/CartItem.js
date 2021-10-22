import React, { useContext } from "react";

import './cartItem.scss'
import { currencyFormatter } from '../../../helpers/helpers'
import { CartContext } from "../../../context/CartContext";

export const CartItem = ({id, name, price, img, cantidad}) =>{

    const {removeItemCart} = useContext(CartContext)

    return(
        <>
            <div className="item-container">
                <div className="item-img">
                    <img src={`/products/${img}`} alt={name} height="150"/> 
                </div>
                <div className="item-info">
                    <p className="card-title">{name}</p>
                                 
                </div>
                <div className="item-qty">
                    { cantidad }
                </div>
                <div className="item-subtotal">
                    {currencyFormatter(price * cantidad)}
                </div>                
                <button className="btn btn-tertiary btn-mini" onClick={()=>removeItemCart(id)}>REMOVE</button>                
            </div>
        </>
    )
    
}