import React from "react";
import Navbar from "../components/navbar";
import Heading from "../components/Heading";
import CreateForm from "../components/CreateForm";

import '../App.css';


const CreateGraduate = () => {



    return (
        <div>
            <Navbar />
            <div className="">
                <Heading title={"Create graduate"}/>
                <CreateForm/>
                
            </div>
        </div>
    )
}

export default CreateGraduate;