import React, { useContext, useState } from 'react'
import { MessengerPiggeon } from "./App"

function LoginPopup() {
    const { loginUser } = useContext(MessengerPiggeon)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Handle submit")
        loginUser({username: username, password: password, favorites: ["Transformers", "Cinderella"]})
    }

    return (
        <div className="overlay">
        <div className="popup login">

           <h2>Login</h2>
           <form onSubmit={handleSubmit}>
              <label>Username</label>
              <input value={username} onChange={e => setUsername(e.target.value)} type="text" />
              <label>Password</label>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
              <input type="submit" value="Submit" />
            </form> 
        </div>
    </div>
    )
}

export default LoginPopup
