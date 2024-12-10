import React from "react";

import '../App.css';
import '../index.css';

import logo from '../assets/logos/level-up-logo.webp'
import logo_mini from '../assets/logos/level-up-logo_mini.webp'

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='sticky top-0 left-0 right-0 bg-black md:px-12 px-4 micro-5 md:text-3xl text-lg'>
            <div className="border-b border-white flex md:justify-center py-4 justify-between">
                <div className="md:w-1/2 w-auto h-16 flex items-center">
                    <img src={logo} className="h-3/4 md:block hidden" alt="website nav logo" />
                    <img src={logo_mini} className="h-3/4 md:hidden block" alt="website nav logo mobile"/>
                </div>
                <div className="md:w-1/2 w-auto h-16 flex md:gap-16 gap-10 items-center justify-end uppercase">
                    <NavLink 
                    to={'/_LevelUpAssessment'} 
                    className={({ isActive }) =>
                        [
                        isActive ? "text-orange" : "text-white",
                        ].join(" ")
                    }>
                        Home
                    </NavLink>
                    <NavLink 
                        to={'/viewall'}
                        className={({ isActive }) =>
                            [
                            isActive ? "text-orange" : "text-white",
                            ].join(" ")
                        }>
                        Graduate List
                    </NavLink>
                    <NavLink 
                    to={'/create'}
                    className={({ isActive }) =>
                        [
                        isActive ? "text-orange" : "text-white",
                        ].join(" ")
                    }>
                        Create Graduate
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;