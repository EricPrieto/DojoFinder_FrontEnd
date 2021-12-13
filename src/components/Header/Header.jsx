import React from "react"
import './Header.css'
import {Link as RouterLink} from 'react-router-dom';
import HeaderLoggedOut from "../HeaderLoggedOut/HeaderLoggedOut";

function Header (){
    return(
      <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <RouterLink to="/" className="text-white">
              Dojo Finder
            </RouterLink>
          </h4>
          <HeaderLoggedOut />
        </div>
      </header>

    )

}

export default Header


