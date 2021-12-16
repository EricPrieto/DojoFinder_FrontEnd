import React from "react";
import Page from '../Page';

function Contact(){
  
  return (
    <Page title="Contact" wide={true}>
      <h2>Contact </h2>
        <div className="col-lg-7 py-3 py-md-5">
        <h3 className="display-3">Contact Us</h3>

          <div className="form-group">
            <label htmlFor="name" class="text-muted mb-1">
                <small>Name</small>
            </label>
             <input autofocus name="name" class="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
          </div>

          <div className="form-group">
            <label htmlFor="email" class="text-muted mb-1">
                <small>Your Email</small>
            </label>
             <input autofocus name="email" class="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
          </div>

          <label htmlFor="email-body" className="text-muted mb-1 d-block">
                <small>Write Concern Here</small>
            </label>
            <textarea nameName="body" id="post-body" 
                className="body-content tall-textarea form-control" type="text">
            </textarea>
        </div>
      <form>
      <input type="submit" value="Send" />     
     </form>
  </Page>
  );
};

export default Contact


