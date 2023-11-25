import React, { useState } from 'react';
import style from './sb.module.css'



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

//! //////////////////////////////////////////   
   return (
      <div className={style.container} >
          <input className={style.search}type='text' placeholder= 'Id...'  onChange={handleChange} value={id} />
          <div className={style.button}>
          <button onClick={handleClick} >Agregar</button>
          <button
        className="random-button"
        onClick={() => props.onSearch(Math.ceil(Math.random() * 826))}
      >
        Add random
      </button>
      </div>
      </div>
  );
}