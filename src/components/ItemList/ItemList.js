import React from "react";
import { Item } from "./Item";
import './itemList.scss'

export const ItemList = ({items = []}) => {
    return (
        <div className="items-list">
            {items.map((item) => <Item {...item} key={item.id}/>)}    
        </div>
    )
}