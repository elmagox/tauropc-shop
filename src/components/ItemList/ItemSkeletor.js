import React from "react"
import Skeleton from "react-loading-skeleton"

export const ItemSkeletor = (props) => (
    <div className="items-list">
    {Array(6)
        .fill()
        .map((item, index) => (

          <div className="card p-4" key={index}>
            <p className="card-title">
              <Skeleton height={32} width={`100%`} />
            </p>
            <h3>
              <Skeleton height={32} width={`40%`} />
            </h3>
            <div>
              <Skeleton height={250} width={`100%`} />
            </div>
          </div>
        ))}
    </div>
)