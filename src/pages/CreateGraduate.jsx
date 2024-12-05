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
                <Heading title={"Create graduate"} update={false}/>
                <CreateForm title={"Create New Graduates"} update={false} />
                
            </div>
        </div>
    )
}

export default CreateGraduate;