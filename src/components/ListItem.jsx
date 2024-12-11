import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeletePopUp from "../components/DeletePopUp";

import '../App.css';


const Listitem= (props) =>{
    const [openDelete, setOpenDelete] = useState(false)

    
    return(
        <tr className="border-2 border-t-white">
            <td className="md:py-4 py-2 md:px-8 px-4">{props.firstName } {props.lastName}</td>
            <td className="md:py-4 py-2 md:px-8 px-4 md:block hidden">{props.emailAddress ? props.emailAddress : props.phoneNumber ? props.phoneNumber : "Field Empty"}</td>
            <td className=" md:py-4 py-2 md:px-8 px-4 gap-4">
                <div className="flex justify-around">
                    <Link to={'../customer/'+ props.graduateId} ><button className="inline rounded-full border-2 border-orange text-orange text-sm p-2 pl-4 pr-4 uppercase">View Mode</button></Link>
                    <Link to={'../update/'+ props.graduateId} ><button className="inline rounded-full border-2 border-green text-green text-sm p-2 pl-4 pr-4 uppercase">Update</button></Link>
                    
                    <button className="inline rounded-full border-2 border-red text-red text-sm p-2 pl-4 pr-4 uppercase" onClick={() => setOpenDelete(true)}>Delete</button>
                    
                    {openDelete && <DeletePopUp graduateId={props.graduateId} firstName={props.firstName } lastName={props.lastName} setOpenDelete={setOpenDelete} fetchData={props.fetchData}/>}
                </div> 
            </td>
        </tr>
    );
}

export default Listitem;