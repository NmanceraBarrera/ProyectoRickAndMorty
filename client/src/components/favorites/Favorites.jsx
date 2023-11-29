import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Card from "../card/Card"
import { filterCards, orderCards } from "../../redux/action";

export default function Favorites({ onClose }) {

    const myFavorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch();

    const handleOrder = event => {
        dispatch(orderCards(event.target.value));
    }

    const handleFilter = event => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div>
                <select style={{ backgroundColor: "skyblue", opacity: 0.8, padding: 5, borderRadius: 10, cursor: "pointer", fontSize: "large" }} name="order" onChange={handleOrder}>
                    <option value="A"> <strong>Ascendente</strong> </option>
                    <option value="D"> <strong>Descendente</strong> </option>
                </select>
                <select name="filter" onChange={handleFilter} style={{ backgroundColor: "skyblue", opacity: 0.8, padding: 5, borderRadius: 10, cursor: "pointer", fontSize: "large" }}>
                    <option value="All"> <strong>All</strong> </option>
                    <option value="Male"><strong>Male</strong></option>
                    <option value="Female"><strong>Female</strong></option>
                    <option value="Genderless"><strong>Genderless</strong></option>
                    <option value="Unknow"><strong>Unknow</strong></option>
                </select>
            </div>

            <div style={{ 
                color: "gray",
                display: "flex",
                flexWrap: "wrap",
                // marginLeft: 30,
                justifyContent: "space-evenly"}}>
                {
                    !myFavorites.length
                    ? <h2>Agregue un personaje a sus favoritos!</h2>
                    :
                    myFavorites.map(favorite => (
                        <Card onClose={onClose} key={favorite.id} {...favorite} />
                    ))
                }
            </div>
        </div>
    )
}
