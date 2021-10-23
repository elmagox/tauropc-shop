import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                <NavLink activeClassName="active" to="/category/component" className="item-menu p-3">Components</NavLink >
                <NavLink activeClassName="active" to="/category/gaming" className="item-menu p-3">Gaming</NavLink >
                <NavLink activeClassName="active" to="/category/network" className="item-menu p-3">Networking</NavLink >
                <NavLink activeClassName="active" to="/category/electric" className="item-menu p-3">Electric</NavLink >
                <NavLink activeClassName="active" to="/category/computersystem" className="item-menu p-3">Computers Systems</NavLink >
                <Link to="/cart">
                    <CartWidget/>
                </Link >
            </div>
        </nav>      
    )
}