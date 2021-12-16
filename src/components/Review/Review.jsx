import React, { useEffect, useState } from "react";
import Page from "../Page";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Review(){
    const [body, setBody] = useState()
    const [rating, setRating] = useState(0)

    async function handleSubmit(e) {
        e.preventDefault()
        try{
        await axios.post('/reviews/',{body,})

        }
        catch(e){
            console.log("There was a problem.")
        }
    }
    return(
    <Page title="Write A Review">
        <h2>Write a Review On Your Experience:</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
             <label htmlFor="post-body" className="text-muted mb-1 d-block">
                <small>Write Review Here</small>
            </label>
            <textarea onChange={e => setBody(e.target.value)} nameName="body" id="post-body" 
                className="body-content tall-textarea form-control" type="text">
            </textarea>
             </div>

        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
            index += 1;

    return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}>
              <span className="star">&#9733;</span>
            </button>
        );
    })}
            </div>
                <p></p>
         <button className="btn btn-primary">Post Review:</button> 

      </form>
      </Page>

    )
}

export default Review