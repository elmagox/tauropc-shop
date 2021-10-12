import { stock } from "../data/stock"

export const pedirProductos = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock)
        }, 2000)
    })
}


export const getItems = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock)
        }, 2000)
    })
}

export const currencyFormatter = (number) =>{
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(number)
}
