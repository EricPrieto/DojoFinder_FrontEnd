import React, { useEffect } from "react";
import Page from "../Page";
import axios from "axios";

function Profile(){
    async function handleSubmit(event){
        event.preventDefault()
        try{
            await axios.post('/profile/', {title: "Test Title", body:"Test Content Here", token: localStorage.getItem('token')})
            console.log("Profile Updated")
        }
        catch(error) {
            console.log("There was a problem.")
        }
    }
    return (
    <Page title="Update Profile">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" class="text-muted mb-1">
            <small>Title</small>
          </label>
          
        </div>

        <button class="btn btn-primary">Update Profile</button>
      </form>

    </Page>
    )
}

export default Profile;