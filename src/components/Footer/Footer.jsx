import React from "react";
import {Link as RouterLink} from 'react-router-dom';

function Footer(){
    return(
    <footer className="border-top text-center small text-muted py-3">
        <p>
            <RouterLink to="/" className="mx-1">
                Home
            </RouterLink>{" "}
            |{" "}
            <RouterLink className="mx-1" to="/about-us">
                About Us
            </RouterLink>{" "}
            |{" "}
            <RouterLink className="mx-1" to="/contact">
                Contact
            </RouterLink>{" "}
        </p>
        <p className="m-0">Copyright &copy; 2021 <a href="/" className="text-muted">Dojo Finder</a>. All rights reserved.</p>
    </footer>

    )
}

export default Footer