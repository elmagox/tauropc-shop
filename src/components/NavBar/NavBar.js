import React from "react";
import logo from '../../assets/skull.svg'
import { CartWidget } from "./CartWidget";

export const NavBar = () =>{
    return (
        <div>
            <nav class="bg-indigo-800">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center content-center">
                            <div class="flex items-center gap-1">
                                <img src={logo} alt="Tauro PC" class="w-6 h-6 text-white"/>
                                <h1 className="logo-title">Tauro PC</h1>
                            </div>
                            <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">                            
                            <p class="menu-item" aria-current="page">Components</p>

                            <p class="menu-item">Gaming</p>

                            <p class="menu-item">Networking</p>

                            <p class="menu-item">Electric</p>

                            <p class="menu-item">Computers Systems</p>
                            </div>
                        </div>
                        </div>
                            <CartWidget/>                        
                    </div>
                </div>
            </nav>
        </div>        
    )
}