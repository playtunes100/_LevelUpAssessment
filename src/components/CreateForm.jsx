import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import '../index.css';

const CreateForm = (props) => {

    const [inputs, setInputs] = useState({});

    useEffect(() => {
        
      }, []);
    

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    async function handleSubmit(event){
        event.preventDefault();

        fetch("https://localhost:7241/api/GraduatesModels", {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json', "access-control-allow-origin" : "*"},
            body: JSON.stringify(inputs)
          }).then((response) => {
            // Display a message showing success or error
            
          });

    }

    return <>
    <form className="grid columns-1 md:grid-cols-2 md:grid-rows-3 m-4 md:m-12" name="createForm">
        <div className="grid mb-6">
            <label className="text-orange">Name</label>
            <input className="bg-black text-white focus:outline-none border-b md:mr-20" type="text" name="firstName" value={inputs.firstName}  onChange={handleChange}/> 
        </div>

        <div className="grid mb-6">
            <label className="text-orange">Surname</label>
            <input className="bg-black text-white focus:outline-none border-b" type="text" name="lastName" value={inputs.lastName} onChange={handleChange}/>
        </div>

        <div className="grid mb-6">
            <label className="text-orange">Phone number</label>
            <input className="bg-black text-white focus:outline-none border-b md:mr-20" type="text" name="phoneNumber" value={inputs.phoneNumber} minLength="1" maxLength="10" onChange={handleChange}/>
        </div>

        <div className="grid mb-6">
            <label className="text-orange">Email Address</label>
            <input className="bg-black text-white focus:outline-none border-b" type="email" name="emailAddress" value={inputs.emailAddress} onChange={handleChange}/>
        </div>

        <div className="grid mb-6">
            <label className="text-orange">Date Of Birth</label>
            <input className="bg-black text-white focus:outline-none border-b md:mr-20" type="date" name="dateOfBirth" value={inputs.dateOfBirth} onChange={handleChange}/>
        </div>

        <button className="flex w-4/5 md:w-1/2 h-10 justify-self-center md:justify-self-end justify-around items-center  text-white micro-5 text-2xl bg-red rounded-full hover:bg-opacity-75" type="button" onClick={handleSubmit}>
            ADD NEW GRADUATES
            <img className="size-6" src="../assets/icons/rocket_white.webp" alt="add new graduates rocket icon" />
            </button>
    </form></>
}

export default CreateForm;