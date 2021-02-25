import { useContext } from "react"
import { MessengerPiggeon } from "./App"

export default function Favorites() {
    const { user } = useContext(MessengerPiggeon)
    console.log("user", user)

    return (
        <>
            <h2>Favorites</h2>
            <ul>
                {user.favorites && user.favorites.length && user.favorites.map(item => <li>{item}</li>)}
            </ul>
        </>
    )
}