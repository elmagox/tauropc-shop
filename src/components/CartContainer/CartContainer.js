import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { CartList } from "./CartList/CartList";
import { currencyFormatter } from "../../helpers/helpers"

export const CartContainer = () =>{

    const { carrito, emptyCart, calcTotalValue } = useContext(CartContext)

    return(
        <div className="container">
            { carrito.length === 0 
            ? <h1>The shopping cart is empty</h1>
            :
            <>
                <h1>Shopping Cart</h1>
                <hr/>  
                <CartList carrito={carrito}/>            
                <hr/>
                <h3>{ currencyFormatter(calcTotalValue()) }</h3>
                <button className="btn btn-default" onClick={emptyCart}>
                    CLEAN CART
                </button>
            </>
            }
        </div>
    )
}