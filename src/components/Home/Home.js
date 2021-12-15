import axios from "axios";
import React, { useEffect, useState } from "react";
import Page from "../Page";

// function Home(){
const Home =(props)=>{

    // const [schools, setSchools] = useState([])
    const [first_names, setFirstName] = useState([])
        
    const getAllUsers = async()=>{
        let response = await axios.get("http://127.0.0.8000'/api/auth/register/'", {headers:{Authorization: "Bearer " + localStorage.getItem('token')}})
       
        console.log(response.data)
        setFirstName(response.data)
    }

    useEffect(()=>{
        getAllUsers();
    }, [])

    return(
        <Page title="You Profile">
            <div>
                {first_names.map((User)=>
                        <div>{first_names.first_name}</div>
                )}
            </div>
            <h2 className="text-center">Hello <strong>{localStorage.getItem("dojoUsername")}</strong>, what would you like to do?.</h2>
            <div>
               
                 <img src="images/JiuJitsu.jpeg" />
                 <p>First School </p>
             </div>
        </Page>
    )
}

export default Home;