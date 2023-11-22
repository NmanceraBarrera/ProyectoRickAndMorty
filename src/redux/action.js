
//todo ///////////////////Actions-creators///////////////////////////////

import { ADD_FAV, REMOVE_FAV } from "./actions-types"

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

//todo ///////////////////Actions-creators///////////////////////////////
