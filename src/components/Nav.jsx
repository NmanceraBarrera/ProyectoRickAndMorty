import React from "react";
import SearchBar from "./SearchBar";


export default function Nav({onSearch}) {
    return <div style={{backgroundColor:'gray',paddingBlock:10,opacity:0.6}}>
    <SearchBar onSearch={onSearch}/> 
</div>
    
}