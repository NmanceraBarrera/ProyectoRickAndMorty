
//todo ///////////////////Actions-creators///////////////////////////////

import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types"

export const addFav = (character) => {//! dudoso 👀
    return{
        type: ADD_FAV,
        payload: character
    }
}
export const removeFav =(id) => {//! dudoso 
    return{
        type: REMOVE_FAV,
        payload: id
    }
}
export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

//todo ///////////////////Actions-creators///////////////////////////////
