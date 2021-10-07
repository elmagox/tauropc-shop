import React from "react";
import logo from '../../assets/skull.svg'
import { CartWidget } from "../CartWidget/CartWidget";
import './navBar.scss'

export const NavBar = () =>{
    return (
        <nav className="header p-5 ">
            <div className="container">
            <div className="logo">
                <img src={logo} alt="Tauro PC" className=""/>
                <span className="title">Tauro PC</span>
            </div>                         
            <div className="item-menu p-3">Components</div>
            <div className="item-menu p-3">Gaming</div>
            <div className="item-menu p-3">Networking</div>
            <div className="item-menu p-3">Electric</div>
            <div className="item-menu p-3">Computers Systems</div>
            <CartWidget/>
            </div>
        </nav>      
    )
}