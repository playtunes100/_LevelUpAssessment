import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import '../App.css';
import Navbar from "../components/navbar";

const Welcome = () => {
    return (
        <div className="h-screen bg-space-background bg-contain">
            
                <Navbar />
                <div className="flex h-12 p-8 justify-center">
                  <img className="h-12" src="../_LevelUpAssessment/assets/logos/softserve-logo.webp" alt="softserve logo" />  
                </div>
                <div className="h-60 ml-8 mt-20 bg-level-up-logo bg-no-repeat bg-contain"></div>
                <div className="ml-8 justify-start">
                    <Link to={'/_LevelUpAssessment/viewall'}><Button className="w-20 ml-8" title="View graduates" /></Link>
                </div>
                <div className="h-12 bg-logo-long bg-repeat-x fixed bottom-20 left-0 right-0"></div>
                <div className="h-3/4 w-3/5 z-10 bg-cover-illustration bg-contain bg-no-repeat bg-right-bottom fixed bottom-0 right-0 pointer-events-none"></div>
                
        </div>
    )
}

export default Welcome;