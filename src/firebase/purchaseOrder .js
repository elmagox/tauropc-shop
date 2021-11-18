import { getFirestore } from '../../firebase/config'
import firebase from 'firebase'
import 'firebase/firestore'

export const purchaseOrder = async (values,carrito, total){
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
            setLoading(true)
            orders.add(orden)
                .then(( res )=> {
                    batch.commit()
                    alert.success(
                    <div>{['The purchase was successful with the order ', <b>${res.id}</b>]}</div>,
                    {
                        timeout: 0,
                        onClose: () => {
                            emptyCart()
                        }
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    setLoading(false)
                })            
        }else{
            alert.error(`Product out stock ${outOfStock.map(el => el.name).join(', ')}`)
        }
}