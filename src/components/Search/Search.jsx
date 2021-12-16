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
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar}/> 120 reviews
                <p>Location 1612 S Mary Road, Houston 77573</p>
                <p>Description: One of the most accomplished Muay Thai training centers in the USA today! We are committed to giving you the best Muay Thai, Kickboxing, and Boxing experience in a clean, and safe atmosphere. </p>
             </div>
             <div className="col-lg-7 py-3 py-md-3">
                <img src="images/gracie .jpeg" />
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar}/> 
                <FontAwesomeIcon icon={faStar}/> 18 reviews
                <p>Location 333 S Fry Road, Houston 77573</p>
                <p>Description: Rilion Gracie Academy in Houston,TX is one of four academies associated with Rillion Gracie in Texas teaching the real Brazilian Jiu-Jitsu and Self-defense. </p>
             </div>
             <div className="col-lg-7 py-3 py-md-3">
                <img src="images/premier.png" />
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar}/> 
                <FontAwesomeIcon icon={faStar}/> 15 reviews
                <p>Location 5233 Bellaire Blvd, Houston 77573</p>
                <p>Description: Al Garza's Premier Martial Arts is a Christian based Martial Arts school that teaches more than just fighting skills. The programs here are intended to develop the whole person through skills, leadership, character, and spiritual training and development.</p>
             </div>
             <div className="col-lg-7 py-3 py-md-3">
                <img src="images/Vici Wrestling.jpeg" />
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/>
                <FontAwesomeIcon icon={faStar} color="orange"/> 11 reviews
                <p>Location 8992 Gulf Freeway, Houston 77573</p>
                <p>Description: The gold standard of development wrestling classes. National All-Americans, State Champions, State Placers and focused competitors make up the staple of this class.</p>
             </div>

        </form>
    </div>
    </Page>
        )
    
    }
}
 export default Search;

