//todo ///////////////////Actions-creators///////////////////////////////
import axios from "axios";
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";
const URL_API = import.meta.env.VITE_URL_API;

export const addFav = (character) => {
  try {
    const endpoint = `${URL_API}/rickandmorty/fav`;
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const removeFav = (id) => {
  const endpoint = `${URL_API}/rickandmorty/fav/` + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

//todo ///////////////////Actions-creators///////////////////////////////
