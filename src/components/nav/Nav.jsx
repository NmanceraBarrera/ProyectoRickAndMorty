import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { NavLink } from "react-router-dom";


export default function Nav(props) {

    return( 
    <div className="Barra">
        <NavLink to = "/home">
            <button>Home</button>
        </NavLink>

        <NavLink to = "/about">
            <button>About</button>
        </NavLink>
        
        <button onClick={props.logout}>Logout</button>

        <SearchBar onSearch={props.onSearch}/>        
        
    </div>
    )
}