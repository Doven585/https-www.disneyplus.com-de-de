import React, { useReducer, useState } from 'react'
import { MessengerPiggeon } from './App'
import { useContext } from "react"
import Cards from "./Cards"





export const Shopingcards  = () => {
    const {card, setCards} = useContext(MessengerPiggeon)
    const state = useContext(MessengerPiggeon)
    const dataBase = [
        {
            name: "Tv-Series",
            price: 25.55,
            id: 1,
        },
        {
            name: "New Movies",
            price: 15.55,
            id: 2,
        },
        {
            name: "Documentary",
            price: 10.55,
            id: 3
        },
        
    ]
 
    return (card)&& (
        
        <div onChange={()=> setCards()

         }>
           {
               dataBase.map(item => (
                   <Cards name={item.name} price={item.price}
                   key={item.id} />
               ))
           }
        </div>
    )
}
