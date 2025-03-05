import React from "react";
import Navbar from "../components/navbar";
import Heading from "../components/Heading";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import '../App.css';
import CreateForm from "../components/CreateForm";

const UpdateGraduate = () => {
    const { id } = useParams();

    const [grad, setGrad] = useState({})

    useEffect(() => {
        fetchData()
        
      }, []);

      const fetchData= () =>{
        fetch("https://gsevbu6qn3.execute-api.af-south-1.amazonaws.com/api/GraduatesModels/"+id, {
            method: "GET",
            mode: "cors",
            headers: { 'Content-Type': 'application/json', "access-control-allow-origin" : "*"},
          }).then((response) => {
            return response.json();
          }).then(data => {
            setGrad(data)
          }).catch(error => {
            console.error('There was a problem with the fetch operation:', error)
          });
      }


    return (
        <div>
            <Navbar />
            <Heading title="Update Graduate"/>
            <CreateForm data={grad} update={true} title={"Update Graduates"} id="id" />
        </div>
    )
}

export default UpdateGraduate;