import React from "react"
import Skeleton from "react-loading-skeleton"
import '../ItemDetail/itemDetail.scss'

export const ItemDetailSkeletor = (props) => (
  <div className="panel">   
    <div className="display-flex">      
        <div className="product-gallery">
          <Skeleton height={405} width={`100%`} />
        </div>
        <div className="product-wrap">
            <h1 className="product-title">
              <Skeleton height={95} width={`100%`} />
            </h1>
            <div className="product-info-group">
                <p className="product-ship-info">
                <Skeleton height={36} width={`100%`} />
                </p>
                <Skeleton height={36} width={`20%`} />
            </div>                    
        </div>
    </div>
    <div style={{marginTop : "10px"}}>
      <Skeleton height={42} width={`8%`} />
    </div>
  </div>
)