import React, { useEffect } from "react";
import { Link } from 'react-router-dom';



function HeaderLoggedIn(props){
  function handleLogout(){
    props.setLoggedIn(false)
    localStorage.removeItem('token')
    localStorage.removeItem('dojoUsername')
   

  
    }
    
  
    return(
      <div className="flex-row my-3 my-md-0">

      <Link to="/search" className="text-white mr-2 header-search-icon" >
        <i className="fas fa-search"></i>
      </Link>

      <Link className="btn btn-sm btn-success mr-2" to="/profile">
        Profile
      </Link>
      <button onClick={handleLogout}  className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>

    )
}

export default HeaderLoggedIn;