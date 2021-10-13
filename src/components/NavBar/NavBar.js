import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/skull.svg'
import { CartWidget } from "../CartWidget/CartWidget";
import './navBar.scss'

export const NavBar = () =>{
    return (
        <nav className="header p-5 ">
            <div className="container display-flex">
                <Link to="/">
                    <div className="logo">
                        <img src={logo} alt="Tauro PC"/>
                        <span className="title">Tauro PC</span>
                    </div>
                </Link>                         
                <Link to="/category/component" className="item-menu p-3">Components</Link>
                <Link to="/category/gaming" className="item-menu p-3">Gaming</Link>
                <Link to="/category/network" className="item-menu p-3">Networking</Link>
                <Link to="/category/electric" className="item-menu p-3">Electric</Link>
                <Link to="/category/computersystem" className="item-menu p-3">Computers Systems</Link>
                <CartWidget/>
            </div>
        </nav>      
    )
}