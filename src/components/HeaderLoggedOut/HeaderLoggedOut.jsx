import React,{ useEffect, useState } from "react";
import axios from "axios";

function HeaderLoggedOut(props){
    const[username, setUsername] = useState()
    const[password, setPassword] = useState()

    async function handleSubmit(event){
        event.preventDefault()
        try {
           const response = await axios.post('api/auth/login/', {username, password})
            if (response.data) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('dojoUsername', response.data.Username);
                localStorage.setItem('dojoAvatar', response.data.Avatar);
                props.setLoggedIn(true)
            }
            else{
                console.log("Incorrect username and password.")
            }
        }
        catch(event){ 
            console.log("There is a problem.")
        }
    }
    
    return(
        <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0 ">
            <div className="row align-items-center">
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                    <input onChange={e => setUsername(e.target.value)} name="username" className="form-control form-control-sm input-dark" type="text" placeholder="Username" autoComplete="off" />
                </div>
                <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                    <input onChange={e => setPassword(e.target.value)}  name="password" className="form-control form-control-sm input-dark" type="password" placeholder="Password" />
                </div>
                <div className="col-md-auto">
                    <button className="btn btn-success btn-sm">Sign In</button>
              </div>
            </div>
        </form>
    )
}
export default HeaderLoggedOut