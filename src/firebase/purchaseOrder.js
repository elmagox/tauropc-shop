import { getFirestore } from './config'
import firebase from 'firebase'
import 'firebase/firestore'

export const purchaseOrder = (values, carrito, total) => {

    return new Promise( async (resolve, reject) => {
        const orden = {
            buyer: {
                ...values
            },
            items: carrito.map((el) => ({id: el.id, price:el.price, cantidad:el.cantidad})),
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const db = getFirestore()
        const orders = db.collection('orders')

        const itemsToUpdate = db.collection('products')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(el=>el.id))


        const query = await itemsToUpdate.get()
        const batch = db.batch()

        const outOfStock = []
        query.docs.forEach(doc => {
            const itemInCart = carrito.find(prod => prod.id === doc.id)
            if(doc.data().stock >= itemInCart.cantidad){
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.cantidad})
            }else{
                outOfStock.push({...doc.data(), id: doc.id})
            }
        });

        if(outOfStock.length === 0){
            orders.add(orden)
                .then(( res )=> {
                    batch.commit()
                    resolve(res.id)
                })
                .catch((err) => {
                   reject(err)
                })          
        } else {
            reject(outOfStock)
        }
    })

    
}