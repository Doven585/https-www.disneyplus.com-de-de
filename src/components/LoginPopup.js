import React from 'react'

function LoginPopup(props) {
    function handleSubmit(e) {
        e.preventDefault()
        props.login({name: "Doven"})
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
