import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { purchaseOrder } from "../../firebase/purchaseOrder"

import { useAlert } from "react-alert"

export const FormCheckout = () => {

    const alert = useAlert()

    const {carrito, calcTotalValue, emptyCart} = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        lastname: '',
        email: '',
        tel: '',
        address: ''      
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
            alert.error("Error in field name")
            return
        }
        if(values.lastname.length < 3){
            alert.show("Error in field lastname")
            return
        }
        if(values.email.length < 3){
            alert.show("Error in field email")
            return
        }
        if(values.tel.length < 3){
            alert.show("Error in field telephone")
            return
        }
        if(values.address.length < 3){
            alert.show("Error in field address")
            return
        }
        
        setLoading(true)
        purchaseOrder(values, carrito, calcTotalValue())
        .then((res) => {
            alert.show(res, {
                onClose: ()=>{
                    emptyCart()
                }
            })
        })
        .catch((err)=>{
            alert.error(`Product out stock ${err.map(el => el.name).join(', ')}`)
        })
        .finally(() => {
            setLoading(false)
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="grid">
                <div className="col-6">
                    <label className="form-label">Name</label>            
                    <input
                        className="form-input "
                        type="text"    
                        placeholder="Name"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div class="col-6">
                <label className="form-label">Lastname</label>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleInputChange}
                />
                </div>
                
                <div class="col-6">
                <label className="form-label">Email</label>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                </div>
                
                <div class="col-6">
                <label className="form-label">Telephone</label>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Telephone"
                    name="tel"
                    value={values.tel}
                    onChange={handleInputChange}
                />
                </div>
                

                <div class="col-6">
                <label className="form-label">Shipping address</label>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Telephone"
                    name="address"
                    value={values.address}
                    onChange={handleInputChange}
                />
                </div>
                
            </div>
            <div className="grid">
                <div class="col-6">
                    <button type="submit" className="btn btn-default mt-4" disabled={loading}>{ !loading ? 'Finish order':'Orden in progress...'}</button>
                </div>
            </div>           
        </form>
    )
}