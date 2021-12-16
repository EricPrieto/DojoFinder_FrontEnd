import React, { useState } from "react";
import Page from '../Page';
import axios from "axios";


function HomeGuest(){
  const [first_name, setFirstName] = useState()
  const [last_name, setLastName] = useState()
  const [username, setUserName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(event){
    event.preventDefault()
    try{
      await axios.post('/api/auth/register/', {first_name, last_name, username, email, password})
      console.log("User created!")
      // Redirect : to profile page
    }
    catch(error){
      console.log("ERROR..")
    }
  }
    return(
    <Page title="Welcome!" wide={true}>
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Welcome to Dojo Finder</h1>
          <p className="lead text-muted">The internet's premier location for finding martial art schools in the Greater Houston Area. Sign up to search our site and see school ratings and reviews for specific locations. ITS FREE! </p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="first-register" className="text-muted mb-1">
                <small>First Name</small>
              </label>
              <input onChange={e => setFirstName(e.target.value)} id="first-register" name="first_name" className="form-control" type="text" placeholder="Enter Your First Name" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="last-register" className="text-muted mb-1">
                <small>Last Name</small>
              </label>
              <input onChange={e => setLastName(e.target.value)} id="last-register" name="last_name" className="form-control" type="text" placeholder="Enter Your Last Name" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input onChange={e => setUserName(e.target.value)} id="username-register" name="username" className="form-control" type="text" placeholder="Create a username" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input onChange={e => setEmail(e.target.value)} id="email-register" name="email" className="form-control" type="text" placeholder="dcc@example.com" autoComplete="off" />
              </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">               
                <small>Password</small>
              </label>
              <input onChange={e => setPassword(e.target.value)} id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
            </div>
            <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
              Sign up NOW!
            </button>
          </form>
        </div>
      </div>
    </Page>

    )
}

export default HomeGuest