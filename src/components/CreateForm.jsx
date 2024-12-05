import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";
import '../App.css';
import '../index.css';

const CreateForm = (props) => {

    const [inputs, setInputs] = useState({});

    useEffect(() => {
        setInputs(props.data ? props.data : {})
        
      }, [props.data]);
    

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    async function handleSubmit(event){
        event.preventDefault();
        
        const method = props.update ? "PUT" : "POST";

        fetch(`https://localhost:7241/api/GraduatesModels/${inputs.graduateId ?? ''}`, {
            method: method,
            mode: "cors",
            headers: { 'Content-Type': 'application/json', "access-control-allow-origin" : "*"},
            body: JSON.stringify(inputs)
          }).then((response) => {
            // Display a message showing success or error
            
        });

    }

    return <>
    <p className="text-white">{props.data ? props.data.firstName : "create"}</p>
    <p className="text-white">{inputs.graduateId}</p>
    <form className="grid columns-1 md:grid-cols-2 md:grid-rows-3 m-4 md:m-12" name="createForm">
        <div className="grid mb-6">
            <label className="text-orange">Name</label>
            <input className="bg-black text-white focus:outline-none border-b md:mr-20" type="text" name="firstName" onChange={handleChange} value={inputs.firstName ?? ''} /> 
        </div>

        <div className="grid mb-6">
            <label className="text-orange">Surname</label>
            <input className="bg-black text-white focus:outline-none border-b" type="text" name="lastName" onChange={handleChange} value={inputs.lastName ?? ''}/>
        </div>

        <div className="grid mb-6">
            <label className="text-orange">Phone number</label>
            <input className="bg-black text-white focus:outline-none border-b md:mr-20" type="text" name="phoneNumber" onChange={handleChange} value={inputs.phoneNumber ?? ''} minLength="1" maxLength="10" />
        </div>

        <div className="grid mb-6">
            <label className="text-orange">Email Address</label>
            <input className="bg-black text-white focus:outline-none border-b" type="email" name="emailAddress"onChange={handleChange}  value={inputs.emailAddress ?? ''} />
        </div>

        <div className="grid mb-6">
            <label className="text-orange">Date Of Birth</label>
            <input className="bg-black text-white focus:outline-none border-b md:mr-20" type="date" name="dateOfBirth" onChange={handleChange} value={inputs.dateOfBirth ?? ''} />
        </div>
        <div className="flex md:justify-end justify-center">
            <Button className="w-4/5 md:w-1/2 " title={props.title} handleCreateSubmit={handleSubmit}/>
        </div>
        
    </form></>
}

export default CreateForm;