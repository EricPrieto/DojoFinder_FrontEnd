import React from "react";


function HomeGuest(){
    return(
    <div className="container py-md-5">
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Welcome to Dojo Finder</h1>
          <p className="lead text-muted">The internet's premier location for finding martial art schools in the Greater Houston Area. Sign up to search our site to find general information about the martial arts, fighting styles, and martial art schools. ITS FREE! </p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input id="username-register" name="username" className="form-control" type="text" placeholder="Create a username" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input id="email-register" name="email" className="form-control" type="text" placeholder="dcc@example.com" autoComplete="off" />
              </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">               
                <small>Password</small>
              </label>
              <input id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
            </div>
            <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
              Sign up NOW!
            </button>
          </form>
        </div>
      </div>
    </div>

    )
}

export default HomeGuest