import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  //todo En vez de usar action puedo destructurar {type, payload} y usarlos directamente.

  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV: {
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    }

    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      }

      const filteredFavs = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );

      return {
        ...state,
        myFavorites: filteredFavs,
      };
    case ORDER:
      const orderCopy = [...state.myFavorites];
      if (action.payload === "A") {
        orderCopy.sort((a, b) => a.id - b.id);
      }
      if (action.payload === "D") {
        orderCopy.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        myFavorites: orderCopy,
      };
    default:
      return { ...state };
  }
};

export default reducer;
