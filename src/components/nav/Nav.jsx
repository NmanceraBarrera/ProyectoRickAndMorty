import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";


export default function Nav({onSearch}) {
    return( 
    <div style={{backgroundColor:'gray',paddingBlock:10,opacity:0.6}}>
        <SearchBar onSearch={onSearch}/> 
        <Link to = {"/about"}>
        <button>About</button>
        </Link>
        <Link to = {"/home"}>
        <button>Home</button>
        </Link>
    </div>
    )
}