import React from "react"
import { useSelector } from "react-redux"
import Card from "../card/Card"

export default function Favorites({onClose}) {

    const myFavorites = useSelector(state => state.myFavorites)

    return (
        <div style={{ color: "gray" }}>
            {myFavorites.map(favorite =>(
                <Card key={favorite.id} {...favorite} onClose={onClose} />))}

        </div>
    )
}
