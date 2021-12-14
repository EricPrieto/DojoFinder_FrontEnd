import React, { useEffect } from "react";
import Page from "../Page";
import axios from "axios";

// import { createPopper } from '@popperjs/core';
// import Popper from 'popper.js';

// import 'bootstrap';

// import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';

// import './Profile.css';


function Profile(){
    const interest = ['BJJ', 'Boxing', 'KickBoxing', 'Wrestling'];

    async function handleSubmit(event){
        event.preventDefault()
        try{
            await axios.post('/profile/', {addres: "Test Address", body:"Test Content Here", token: localStorage.getItem('token')})
            console.log("Profile Updated")
        }
        catch(error) {
            console.log("There was a problem.")
        }
    }
    return (
    <Page title="Update Profile">
        <div className="row align-items-center">
        <form onSubmit={handleSubmit}>
            <div className="col-lg-7 py-3 py-md-5">
            <h3 className="display-3">Update Profile</h3>
                    <div className="form-group">
                        <label htmlFor="address-update" class="text-muted mb-1">
                            <small>Address</small>
                        </label>
                        <input autofocus name="address" id="address-update" class="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip-update" class="text-muted mb-1">
                            <small>Zip Code</small>
                        </label>
                        <input autofocus name="zip_code" id="zip-update" class="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone-update" class="text-muted mb-1">
                            <small>Phone Number</small>
                        </label>
                        <input autofocus name="phone" id="phone-update" class="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
                    </div>


                    


                    <div className="form-group">
                        <p>Select the Martial Arts that interest you</p>
                        <button  class="btn btn-primary dropdown-toggle"
                        type="button" 
                        id="dropdownMenuButton"
                        data-toggle="dropdown" 
                        aria-haspopup="true"
                        autofocus name="school_interest"> 
                         Martial Arts Interest
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#nogo">Item 1</a>
                            <a className="dropdown-item" href="#nogo">Item 2</a>
                            <a className="dropdown-item" href="#nogo">Item 3</a>
                        </div>                                     
                    </div>

        <button class="btn btn-primary">Update Profile</button>
            {/* <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                         <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                         <a class="dropdown-item" href="#">Something else here</a>
                        </ul>
                    </div> */}

        </div>
      </form>
      


      </div>

    </Page>
    )
}

export default Profile;

