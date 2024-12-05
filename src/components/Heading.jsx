import React from "react";

import '../App.css';
import '../index.css';


const Heading= (props) => {


    return(
        <div>
        <h1 className="text-white md:text-2xl ml-4 md:ml-12 mt-16">LEVEL UP 2024</h1>
        <div className="flex h-12 items-center gap-2 md:gap-20 overflow-hidden">
            <h1 className="flex-grow-1 w-full text-lg md:text-6xl text-nowrap text-white font-bold ml-4 md:ml-12 uppercase">{props.title}</h1>
            <img className="h-full flex-grow-1" src="../assets/logos/long.svg" alt="long logo" />
        </div>
        
    </div> 
    )
}

export default Heading;