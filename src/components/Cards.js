import React, {useContext} from 'react'
import { MessengerPiggeon } from './App'

function Cards(props) {
   //const state = useContext(MessengerPiggeon)
    return (
        <div>
            <h2>{props.name}</h2>
            <h4>{props.price}</h4>
            <button>Add to cart</button>
            <hr/>
        </div>
    )
}

export default Cards
