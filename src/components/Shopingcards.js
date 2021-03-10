import React from 'react'
import { MessengerPiggeon } from './App'
import { useContext } from "react"




export const Shopingcards  = () => {
    const {showData, dispach}= useContext(MessengerPiggeon)
    initialState = [
        {
            name: "Tv-Series",
            price: 25.55,
            id: 1,

            name: "New Movies",
            price: 15.55,
            id: 2,

            name: "Documentary",
            price: 10.55,
            id: 3
        },
    ]
 
    return (showData) && (
        <div>
           {dispach()}
        </div>
    )
}
