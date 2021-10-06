import React from "react";
import logo from '../../assets/skull.svg'
import { CartWidget } from "../CartWidget/CartWidget";
import './navBar.css'

export const NavBar = () =>{
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Tauro PC" className=""/>
                <h1 classNameName="">Tauro PC</h1>
            </div>                         
            <div className="item-menu">Components</div>
            <div className="item-menu">Gaming</div>
            <div className="item-menu">Networking</div>
            <div className="item-menu">Electric</div>
            <div className="item-menu">Computers Systems</div>
            <CartWidget/>          
        </nav>      
    )
}