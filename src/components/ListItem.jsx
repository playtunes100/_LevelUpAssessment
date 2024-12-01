import React from "react";

import '../App.css';


const Listitem= (props) =>{


    return(
        <tr className="border-2 border-t-white">
            <td className="md:py-4 py-2 md:px-8 px-4">{props.firstName } {props.lastName}</td>
            <td className="md:py-4 py-2 md:px-8 px-4 md:block hidden">{props.emailAddress ? props.emailAddress : props.phoneNumber ? props.phoneNumber : "Field Empty"}</td>
            <td className=" md:py-4 py-2 md:px-8 px-4 gap-4">
                <div className="flex justify-around">
                    <button className="inline rounded-full border-2 border-orange text-orange text-sm p-2 pl-4 pr-4 uppercase">View Mode</button>
                    <button className="inline rounded-full border-2 border-green text-green text-sm p-2 pl-4 pr-4 uppercase">Update</button>
                    <button className="inline rounded-full border-2 border-red text-red text-sm p-2 pl-4 pr-4 uppercase">Delete</button>
                </div> 
            </td>
        </tr>
    );
}

export default Listitem;