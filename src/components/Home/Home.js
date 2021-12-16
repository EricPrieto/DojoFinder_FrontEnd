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
            <h1 className="text-center">Welcome Back to Dojo Finder! </h1>
            <h2>The internet's premier location for finding martial art schools in the Greater Houston Area.</h2>
            {/* <strong>{localStorage.getItem("dojoUsername")}</strong> */}<p></p>
            <h2>Your Recently Saved Schools:</h2>

            <div className="col-lg-9 py-3 py-md-5">
                
                 <img src="images/JiuJitsu.jpeg" />
                 <p>BLITZ BJJ </p>
                 <FontAwesomeIcon icon={faStar} color="orange"/>
                 <FontAwesomeIcon icon={faStar} color="orange"/>
                 <FontAwesomeIcon icon={faStar} color="orange"/>
                 <FontAwesomeIcon icon={faStar} color="orange"/> 
                 <FontAwesomeIcon icon={faStar} color="orange"/> 46 reviews
                 <p>Location: 518 West Blvd, League City 77573</p>
                 <p>Description: We Specialize in Gracie/Brazilian Jiu-Jitsu (BJJ) and Mixed-Martial Arts (MMA) for the entire family!</p> 
                 <Link className="btn btn-sm btn-success mr-2" to="/review">
                    Write a Review
                </Link>    
             </div>  
             
             <div className="col-lg-7 py-3 py-md-3">
                <img src="images/silva.jpeg" />
                <p>Silva BJJ: Specialize in Gracie/Brazilian Jiu-Jitsu for the entire family!</p>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar}/> 15 reviews
                <p>Location 5233 Bellaire Blvd, Houston 77573</p>
                <p>Description: Personalized instruction from 2010 IBJJF Black Belt World Champion Pablo Silva. Men, women, and children as young as 3 yrs. old are sure to benefit from any of our programs </p>
                <Link className="btn btn-sm btn-success mr-2" to="/review">
                    Write a Review
                </Link>  
             </div>
        </Page>
    )
}

export default Home;