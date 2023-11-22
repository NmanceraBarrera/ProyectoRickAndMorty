import{ createStore } from "redux";
import  reducer  from "./reducer";
import { useSelector } from "react-redux";


const store = createStore(reducer)



export default store;