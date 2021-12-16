import React, { useEffect, useState, Component } from "react";
import Page from "../Page";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




class Search extends Component {
    state = {
        searchTerm: ''
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        //this.props.getProduct(this.state.searchTerm);
    }

render() {
    
    return (
     <Page title="Search">
     <div className="row align-items-center">
        <form onSubmit={this.handleSubmit}>
             <div class="form-outline">
                <input type="search" id="form1" class="form-control" />
            <label class="form-label" for="form1">Search</label>
            </div>
            <button type="button" class="btn btn-primary">
             <i class="fas fa-search"></i>
             </button>
        
            <div className="col-lg-7 py-3 py-md-3">
                <img src="images/muytai.jpeg" />
                <p>Silva BJJ: Specialize in Gracie/Brazilian Jiu-Jitsu for the entire family!</p>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar}/> 120 reviews
                <p>Location 1145 S. Hwy 45, Houston 77573</p>
                <p>Description: Personalized instruction from 2010 IBJJF Black Belt World Champion Pablo Silva. Men, women, and children as young as 3 yrs. old are sure to benefit from any of our programs </p>
             </div>
             <div className="col-lg-7 py-3 py-md-3">
                <img src="images/gracie .jpeg" />
                <p>Silva BJJ: Specialize in Gracie/Brazilian Jiu-Jitsu for the entire family!</p>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar}/> 
                <FontAwesomeIcon icon={faStar}/> 18 reviews
                <p>Location 5233 Bellaire Blvd, Houston 77573</p>
                <p>Description: Personalized instruction from 2010 IBJJF Black Belt World Champion Pablo Silva. Men, women, and children as young as 3 yrs. old are sure to benefit from any of our programs </p>
             </div>
             <div className="col-lg-7 py-3 py-md-3">
                <img src="images/premier.png" />
                <p>Silva BJJ: Specialize in Gracie/Brazilian Jiu-Jitsu for the entire family!</p>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar}/> 
                <FontAwesomeIcon icon={faStar}/> 15 reviews
                <p>Location 5233 Bellaire Blvd, Houston 77573</p>
                <p>Description: Personalized instruction from 2010 IBJJF Black Belt World Champion Pablo Silva. Men, women, and children as young as 3 yrs. old are sure to benefit from any of our programs </p>
             </div>
             <div className="col-lg-7 py-3 py-md-3">
                <img src="images/Vici Wrestling.jpeg" />
                <p>Silva BJJ: Specialize in Gracie/Brazilian Jiu-Jitsu for the entire family!</p>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/> 11 reviews
                <p>Location 8992 Gulf Freeway, Houston 77573</p>
                <p>Description: Personalized instruction from 2010 IBJJF Black Belt World Champion Pablo Silva. Men, women, and children as young as 3 yrs. old are sure to benefit from any of our programs </p>
             </div>

        </form>
    </div>
    </Page>
        )
    
    }
}
 export default Search;

