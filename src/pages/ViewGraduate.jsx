import React from "react";
import Navbar from "../components/navbar";
import Heading from "../components/Heading";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import '../App.css';

const ViewGraduate = () => {
    const { id } = useParams();

    const [grad, setGrad] = useState({})

    useEffect(() => {
        fetchData()
        
      }, []);

      const fetchData= () =>{
        fetch("https://graduatesapi-eqhabcfdfcc9c2hf.southafricanorth-01.azurewebsites.net/api/GraduatesModels/"+id, {
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
            <Heading title="View Graduate Details"/>
            <div className="m-12">
                <div className="flex bg-white rounded-lg h-10 pl-4 items-center text-xl whitespace-pre"><span className="font-bold">{grad.firstName}</span>  {grad.lastName}</div>
                <div className="grid mt-12 divide-white divide-y-2 gap-6 flex-shrink">
                    <div className="grid grid-cols-4 grid-rows-2 md:grid-cols-3 ">
                        <div className="col-span-3 md:col-span-1">
                            <p className="text-orange text-xs uppercase">Phone Number</p>
                            <p className="text-white text-xl ">{grad.phoneNumber}</p>    
                        </div>
                        <div className="col-span-3 md:col-span-1 md:mt-0 mt-4 order-3 md:order-2 divide-white md:divide-x-2">
                            <p className="md:pl-6 text-orange text-xs uppercase">Email Address</p>
                            <p className="md:pl-6 text-white text-xl ">{grad.emailAddress}</p>    
                        </div>
                        <div className="col-span-1 md:col-span-1 order-2 md:order-3 divide-white divide-x-2">
                            <p className="pl-6 text-orange text-xs uppercase">Age</p>
                            <p className="pl-6 text-white text-xl ">{grad.age}</p>    
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-white divide-x-2">
                        <div className="mt-6">
                            <p className="text-orange text-xs uppercase">Date Created</p>
                            <p className="text-white text-xl ">{new Date(grad.dateCreated).toLocaleDateString("en-US").replaceAll('/', '.')}</p>    
                        </div>
                        <div className=" mt-6 ">
                            <p className="pl-6 text-orange text-xs uppercase">Last Edited</p>
                            <p className="pl-6 text-white text-xl ">{new Date(grad.dateEdited).toLocaleDateString("en-US").replaceAll('/', '.')}</p>    
                        </div>
                    </div>
                    
                    
                </div>
            </div>

        </div> 
    )
}

export default ViewGraduate;