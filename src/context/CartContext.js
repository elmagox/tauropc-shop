import {createContext, useState, useEffect} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(() => {
      return JSON.parse(localStorage.getItem('carrito')) || []
    })

    const addToCart = (item) => {    
      setCarrito([...carrito, item])    
    }
  
    const removeItemCart = (itemId) => {
      const newCart = carrito.filter( (item) => item.id !== itemId)
      setCarrito(newCart)
    }
  
    const emptyCart = () => {
      setCarrito([])
    }
  
    const calcAmount = () => {
      return carrito.reduce ((acc, item)=> acc + item.cantidad, 0)
    }


    const calcTotalValue = () => {
      return carrito.reduce ((acc, item)=> acc + item.cantidad * item.price, 0)
    }

    const isInCart = (itemId) => {
      return carrito.some((item) => item.id === itemId)
    }

    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider  value={{carrito, addToCart, removeItemCart, calcAmount, emptyCart, isInCart, calcTotalValue}}>
            {children}
        </CartContext.Provider>
    )
}