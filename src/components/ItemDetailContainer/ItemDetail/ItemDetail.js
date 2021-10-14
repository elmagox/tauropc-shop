import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../../../helpers/helpers"; 
import './itemDetail.scss'
export const ItemDetail = ({name, price, img, description, category}) =>{
    const { goBack } = useHistory()
    return (
        <div className="panel">   
            <div className="display-flex">      
                <div className="product-gallery">
                    <img src={`/products/${img}`} alt={name}/>
                </div>
                <div className="product-wrap">
                    <h1 className="product-title">{name}</h1>
                    <div className="product-info-group">
                        <p className="product-ship-info">{description}</p>
                        <Link className="product-category" to={`/category/${category}`}>
                           Category: {category}
                        </Link>
                        <h1>Price: {currencyFormatter(price)}</h1>
                        <button className="btn btn-buy">ADD TO CART</button>
                        
                    </div>                    
                </div>
            </div>
            
            <button className="btn btn-default" onClick={ () => goBack()}>BACK</button>
        </div>
    )
}