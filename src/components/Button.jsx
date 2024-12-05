import React from "react";

import '../App.css';
import '../index.css';

const Button= (props) =>{


    return(
        <button className="flex w-fit pl-6 pr-6 h-10  items-center justify-around  text-white micro-5 text-2xl bg-red rounded-full hover:bg-opacity-75 uppercase" onClick={props.handleCreateSubmit} type="button" >
            {props.title}
            <img className="size-6" src="../assets/icons/rocket_white.webp" alt="add new graduates rocket icon" />
            </button>
    );
}

export default Button;