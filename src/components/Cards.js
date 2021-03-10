import React, {useContext} from 'react'
import { MessengerPiggeon } from './App'

function Cards() {
    const state = useContext(MessengerPiggeon)
    return (
        <div>
            <h2>{state.name}</h2>
            <h4>{state.price}</h4>
            <button>Add to cart</button>
            <hr/>
        </div>
    )
}

export default Cards
