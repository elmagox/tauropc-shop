import React from "react";

export const ItemCount = ({cantidad, modify, max}) => {

    const handleSubtract = () => {
        if(cantidad > 1){
            modify(cantidad - 1)
        }
    }

    const handleAdd = () => {
        if(cantidad < max){
            modify(cantidad + 1)
        }
    }

    return (
        <>
            <button className="btn btn-default" onClick={handleSubtract}>
                -
            </button>
            <span className="m-4">{cantidad}</span>
            <button className="btn btn-default" onClick={handleAdd}>
                +
            </button>
        </>
    )
    
}