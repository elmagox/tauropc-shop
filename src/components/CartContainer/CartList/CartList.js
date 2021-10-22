import React from "react";
import { CartItem } from "../CartItem/CartItem";
import './cartList.scss'

export const CartList = ( {carrito} ) => {
    return (
        <>
            { carrito.map((item) => <CartItem {...item} key={item.id}/>) }    
        </>
    )
}