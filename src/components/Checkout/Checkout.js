import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Redirect } from "react-router-dom"
import { FormCheckout } from "../FormCheckout/FormCheckout"

export const Checkout = () => {
    const {carrito} = useContext(CartContext)
    return(
        <>
        {carrito.length === 0 && <Redirect to="/" />}
        <div className="container">
            <h2>Review your order</h2>
            <hr/>
            <FormCheckout />
        </div>
        </>
    )
}