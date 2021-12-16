import axios from "axios";
import React, { useEffect, useState } from "react";
import Page from "../Page";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
                 <p>BLITZ BJJ </p>
                 <FontAwesomeIcon icon={faStar} color="orange"/>
                 <FontAwesomeIcon icon={faStar} color="orange"/>
                 <FontAwesomeIcon icon={faStar} color="orange"/>
                 <FontAwesomeIcon icon={faStar} color="orange"/> 10 reviews
                 <p>Location 518 West Blvd, 77573</p>
                 <p>We Specialize in Gracie/Brazilian Jiu-Jitsu (BJJ) and Mixed-Martial Arts (MMA) for the entire family!
                    Certified Black Belt Instruction</p>      
             

             
                 <img src="images/JiuJitsu.jpeg" />
                 <p>BLITZ BJJ:Specialize in Gracie/Brazilian Jiu-Jitsu for the entire family!</p>
                 <FontAwesomeIcon icon={faStar} color="orange"/>
                 <FontAwesomeIcon icon={faStar} color="orange"/>
                 <FontAwesomeIcon icon={faStar} color="orange"/>
                 <FontAwesomeIcon icon={faStar}/> 10 reviews
                 <p>Location 518 West Blvd, 77573</p>
                 <Link className="btn btn-sm btn-success mr-2" to="/review">
                    Write a Review
                  </Link>  
             </div>
        </Page>
    )
}

export default Home;