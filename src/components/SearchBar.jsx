import React, { useState } from 'react';



export default function SearchBar(props) {
   const [id,setId] =useState("")
   
   function handleChange(event) {
      setId(event.target.value);
   }
//! /////////////////////////////////////////Borrar el input cuando clickeas el search
   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

//! /////////////////////////////////////////   
   return (
      <div style={{margin:10,opacity:1}}>
          <input type='text' placeholder= 'Id...' style={{textAlign:'left',paddingRight:80}} onChange={handleChange} value={id} />
          <button onClick={handleClick} style={{backgroundColor: 'yellow', color:'black', marginLeft:30,marginRight:80}}>Agregar</button>
          
      </div>
  );
}