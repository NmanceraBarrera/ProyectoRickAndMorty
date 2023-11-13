import React from 'react';


export default function SearchBar(props) {
   return (
      <div style={{display: 'flex',justifyContent:'center'}}>
         <input type='search' />
         <button onClick={() =>props.onSearch("Id:1")}>Agregar</button>
      </div>
   );
}
