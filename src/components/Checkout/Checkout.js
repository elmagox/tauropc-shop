import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Redirect } from "react-router-dom"
import { purchaseOrder } from '../firebase/purchaseOrder'

import { useAlert } from 'react-alert'

export const Checkout = () => {
    const alert = useAlert()

    const {carrito, calcTotalValue, emptyCart} = useContext(CartContext)


    const [values, setValues] = useState({
        name: '',
        lastname: '',
        email: '',
        tel: ''        
    })

    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(values.name.length < 3){
            alert.error("Name is empty")
            return
        }
        if(values.lastname.length < 3){
            alert.show("Lastname is empty")
            return
        }
        if(values.email.length < 3){
            alert.show("Email is empty")
            return
        }
        if(values.tel.length < 3){
            alert.show("Telephone is empty")
            return
        }

        purchaseOrder(values, carrito, calcTotalValue())
        
        
        
        // carrito.forEach(el => {
        //     const docRef = db.collection('products').doc(el.id)
        //     docRef.get().then((doc)=>{
        //         docRef.update({
        //             stock: doc.data().stock - el.cantidad
        //         })
        //     })
        // });
    }

    return(
        <>
        {carrito.length === 0 && <Redirect to="/" />}
        <div className="container">
            <h2>Resumen de compra</h2>
            <hr/>
            <div>
            <form onSubmit={handleSubmit}>
                <h2>Formulario</h2>
                <input
                    className=""
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                />
                {values.name.length === 0 && <small>This field is required.</small>}
                <input
                    className=""
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleInputChange}
                />
                {values.lastname.length === 0 && <small>This field is required.</small>}
                <input
                    className=""
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                {values.email.length === 0 && <small>This field is required.</small>}                
                <input
                    className=""
                    type="text"
                    placeholder="Telephone"
                    name="tel"
                    value={values.tel}
                    onChange={handleInputChange}
                />
                {values.tel.length === 0 && <small>This field is required.</small>}                
                
                <button type="submit" disabled={loading}>{ !loading ? 'Finish order':'Orden in progress...'}</button>
            </form>
            </div>            
        </div>
        </>
    )
}