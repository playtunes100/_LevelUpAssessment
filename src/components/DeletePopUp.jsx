import React from "react";


const DeletePopUp = (props) =>{

    async function handleSubmit(event){
        event.preventDefault();
        

        fetch(`https://gsevbu6qn3.execute-api.af-south-1.amazonaws.com/api/GraduatesModels/${props.graduateId ?? ''}`, {
            method: "DELETE",
            mode: "cors",
            headers: { 'Content-Type': 'application/json', "access-control-allow-origin" : "*"}
          }).then((response) => {
            // Display a message showing success or error
            props.fetchData()
            props.setOpenDelete(false)
            
        });

    }

    return(
        <div className="flex justify-center items-center  h-screen w-screen z-20 bg-black/75 absolute top-0 left-0">
            <div className="flex flex-col items-center h-3/5 w-5/6 md:w-1/3 bg-white " >
                <p className="micro-5 text-2xl text-black mt-20">DELETE GRADUATE</p>
                <h1 className="font-bold text-3xl text-black">DELETE</h1>
                <h1 className="mb-14 text-xl text-black whitespace-pre"><span className="font-bold">{props.firstName}</span> {props.lastName}</h1>
                <button className="flex items-center micro-5 text-4xl rounded-full border-2 border-red text-red m-5 h-10 p-2 pl-8 pr-8 uppercase transition ease-in-out delay-50 hover:bg-red hover:text-white" onClick={handleSubmit} >Delete</button>
                <button className="flex items-center micro-5 text-4xl rounded-full border-2 border-green text-green m-5 h-10 p-2 pl-8 pr-8 uppercase transition ease-in-out delay-50 hover:bg-green hover:text-white" onClick={() => props.setOpenDelete(false)} >Cancel</button>
            </div>
            
        </div>
    )
}

export default DeletePopUp;