import React, {useState, useContext} from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { currencyFormatter } from "../../../helpers/helpers"; 
import { ItemCount } from "../../ItemCount/ItemCount";
import './itemDetail.scss'
export const ItemDetail = ({id, name, price, img, description, category, stock}) =>{
    const { goBack } = useHistory()
    const { addToCart, removeItemCart, isInCart } = useContext(CartContext)
    const [ cantidad, setCantidad ] = useState(1)

    const handleAdd = ()=>{
        const newItem = {
            id,
            name,
            price,
            img,
            description,
            category,
            cantidad,
            stock
        }
        if(cantidad > 0){
            addToCart(newItem)            
        }
    }

    return (
        <div className="panel">   
            <div className="display-flex">
                {typeof name === 'undefined' 
                ? <h1>Product is not found.</h1>  
                : <>
                    <div className="product-gallery">
                        <img src={`/products/${img}`} alt={name}/>
                    </div>
                    <div className="product-wrap">
                        <h1 className="product-title">{name}</h1>
                        <div className="product-info-group">
                            <p className="product-ship-info">{description}</p>
                            <Link className="product-category" to={`/category/${category}`}>
                            category: {category}
                            </Link>
                            <h1>Price: {currencyFormatter(price)}</h1>
                            { 
                                isInCart(id) 
                                ? <><br/><Link to="/cart" className="btn btn-default">PRODUCT IN CART</Link></>
                                : 
                                <>
                                    <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                                    <br/>
                                    <button className="btn btn-buy mt-4 mr-4" onClick={handleAdd}>ADD TO CART</button>
                                    <button className="btn btn-default mt-4" onClick={()=>removeItemCart(id)}>REMOVE TO CART</button>  
                                </>
                            }                       
                                                
                        </div>                    
                    </div>
                  </>
             }
            </div>
            
            <button className="btn btn-default" onClick={ () => goBack()}>BACK</button>
        </div>
    )
}