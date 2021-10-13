import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/skull.svg'
import { CartWidget } from "../CartWidget/CartWidget";
import './navBar.scss'

export const NavBar = () =>{
    return (
        <nav className="header p-5 ">
            <div className="container">
                <Link to="/">
                    <div className="logo">
                        <img src={logo} alt="Tauro PC"/>
                        <span className="title">Tauro PC</span>
                    </div>
                </Link>                         
                <Link to="/category/1" className="item-menu p-3">Components</Link>
                <Link to="/category/2" className="item-menu p-3">Gaming</Link>
                <Link to="/category/3" className="item-menu p-3">Networking</Link>
                <Link to="/category/4" className="item-menu p-3">Electric</Link>
                <Link to="/category/5" className="item-menu p-3">Computers Systems</Link>
                <CartWidget/>
            </div>
        </nav>      
    )
}