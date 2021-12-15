import React, { useEffect, useState, Component } from "react";
import Page from "../Page";
import axios from "axios";




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

            <div>
                <fontAwsomeIcon  className="avg_rating"/>
            </div>
        

            <div>
                <p>First School </p>
                 <img src="logo192.png"/>
             </div>

             <div>
             <p>Second School </p>
                 <img src="images/Judo.jpeg"/>
             </div>

             <div>
             <p>Second School </p>
                 <img src="images/Vici Wrestling.jpeg"/>
             </div>
        </form>
    </div>
    </Page>
        )
    
    }
}
 export default Search;

