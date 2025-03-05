import React from "react";
import Navbar from "../components/navbar";
import Heading from "../components/Heading";
import Listitem from "../components/ListItem";

 
import { useEffect, useState } from "react";

import '../App.css';

const ViewAllGraduates = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        fetchData()
        
      }, []);

      const fetchData= () =>{
        fetch("https://drsfhz1hdk.execute-api.af-south-1.amazonaws.com/api/GraduatesModels", {
            method: "GET",
            mode: "cors",
            headers: { 'Content-Type': 'application/json', "access-control-allow-origin" : "*"},
          }).then((response) => {
            return response.json();
          }).then(data => {
            setList(data)
          }).catch(error => {
            console.error('There was a problem with the fetch operation:', error)
          });
      }
    
    

    return (
        <div>
            <Navbar />
            <Heading title="graduate list" />
            <section className="md:px-12 px-4 mt-6">
                <table className="w-full border border-white md:rounded-t-xl rounded-t-lg overflow-hidden">
                    <thead className="bg-white uppercase micro-5 text-3xl">
                        <tr>
                            <th className="md:rounded-s-xl rounded-s-lg md:py-2 py-1 md:px-8 px-4">
                                <div className="relative flex justify-start items-center">
                                    Full Name
                                    <img src="../_LevelUpAssessment/assets/icons/rocket_black.webp" className="absolute right-0 h-2/3 md:block hidden" alt="icon" />
                                </div>
                            </th>
                            <th className="md:py-2 py-1 md:px-8 px-4 md:block hidden">
                                <div className="relative flex justify-start items-center">
                                    Contact Details
                                    <img src="../_LevelUpAssessment/assets/icons/rocket_black.webp" className="absolute right-0 h-2/3" alt="icon" />
                                </div>
                            </th>
                            <th className="md:rounded-e-xl rounded-e-lg md:py-2 py-1 md:px-8 px-4">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        {list.map((grad) => grad.isDeleted === false ? <Listitem key={grad.graduateId} graduateId={grad.graduateId} firstName={grad.firstName} lastName={grad.lastName} emailAddress={grad.emailAddress} phoneNumber={grad.phoneNumber} fetchData={fetchData} /> : "")} 
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default ViewAllGraduates;