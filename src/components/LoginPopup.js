import React from 'react'

function LoginPopup() {
    return (
        <div className="overlay">
        <div className="popup login">

           <h2>Login</h2>
           <form>
              <label>Username</label>
              <input type="text" />
               
            </form> 
        </div>
    </div>
    )
}

export default LoginPopup
