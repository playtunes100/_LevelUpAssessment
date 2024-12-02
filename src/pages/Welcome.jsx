import React from "react";
import Button from "../components/Button";

import '../App.css';
import Navbar from "../components/navbar";

const Welcome = () => {
    return (
        <div className="h-screen bg-space-background bg-contain">
            
                <Navbar />
                <div className="flex h-12 p-8 justify-center">
                  <img className="h-12" src="../assets/logos/softserve-logo.webp" />  
                </div>
                <div className="h-60 ml-8 mt-20 bg-level-up-logo bg-no-repeat bg-contain"></div>
                <div className="ml-8 justify-start">
                    <Button className="w-20 ml-8" title="View graduates" />
                </div>
                <div className="h-12 bg-logo-long bg-repeat-x fixed bottom-20 left-0 right-0"></div>
                
        </div>
    )
}

export default Welcome;