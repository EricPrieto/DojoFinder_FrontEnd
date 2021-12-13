import React, { useEffect } from "react";
import Page from "../Page";

function Home(){
    return(
        <Page title="You Profile">
            <h2 className="text-center">Hello <strong>{localStorage.getItem("dojoUsername")}</strong>, what would you like to do?.</h2>
            <p className="lead text-muted text-center">PROFILE AND ABILITY TO SEARCH WILL GO HERE.</p>
        </Page>
    )
}

export default Home;