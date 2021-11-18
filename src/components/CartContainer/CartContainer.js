import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { CartList } from "./CartList/CartList";
import { currencyFormatter } from "../../helpers/helpers"
import { Redirect} from "react-router";
import { Link } from "react-router-dom";

export const CartContainer = () =>{

    const { carrito, emptyCart, calcTotalValue, calcAmount } = useContext(CartContext)
    

    return(
        <div className="container">
            { carrito.length === 0 
            ? <Redirect  to="/" />
            :
            <>
                <h1>Shopping Cart</h1>
                <hr/>  
                <CartList carrito={carrito}/>            
                <hr/>
                <h3>SUBTOTAL ({calcAmount()} PRODUCTS): { currencyFormatter(calcTotalValue()) }</h3>
                <button className="btn btn-default" onClick={emptyCart}>
                    CLEAN CART
                </button>
                <Link to="/checkout" className="btn btn-default ml-4">CHECKOUT</Link>
            </>
            }
        </div>
    )
}