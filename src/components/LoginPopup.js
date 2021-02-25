import React, { useContext } from 'react'
import { MessengerPiggeon } from "./App"

function LoginPopup() {
    const { loginUser } = useContext(MessengerPiggeon)

    function handleSubmit(e) {
        e.preventDefault()
        loginUser({username: "Doven", favorites: ["Transformers"]})
    }

    return (
        <div className="overlay">
        <div className="popup login">

           <h2>Login</h2>
           <form onSubmit={handleSubmit}>
              <label>Username</label>
              <input type="text" />
               
            </form> 
        </div>
    </div>
    )
}

export default LoginPopup
