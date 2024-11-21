import React from "react";
import Navbar from "../components/navbar";

import '../App.css';

const ViewAllGraduates = () => {
    return (
        <div>
            <Navbar />

            <section className="md:px-12 px-4 mt-6">
                <table className="w-full border border-white md:rounded-t-xl rounded-t-lg overflow-hidden">
                    <thead className="bg-white uppercase micro-5 text-3xl">
                        <tr>
                            <th className="md:rounded-s-xl rounded-s-lg md:py-2 py-1 md:px-8 px-4">
                                <div className="relative flex justify-start items-center">
                                    Full Name
                                    <img src="../assets/icons/rocket_black.webp" className="absolute right-0 h-2/3 md:block hidden" />
                                </div>
                            </th>
                            <th className="md:py-2 py-1 md:px-8 px-4 md:block hidden">
                                <div className="relative flex justify-start items-center">
                                    Contact Details
                                    <img src="../assets/icons/rocket_black.webp" className="absolute right-0 h-2/3" />
                                </div>
                            </th>
                            <th className="md:rounded-e-xl rounded-e-lg md:py-2 py-1 md:px-8 px-4">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        {/* Sample row 
                            <tr>
                                <td className="md:py-4 py-2 md:px-8 px-4">Full Name</td>
                                <td className="md:py-4 py-2 md:px-8 px-4 md:block hidden">Contact Details</td>
                                <td className="md:py-4 py-2 md:px-8 px-4">Actions</td>
                            </tr>
                        */}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default ViewAllGraduates;