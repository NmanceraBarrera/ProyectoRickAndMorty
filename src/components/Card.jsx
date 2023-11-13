import React from "react";


export default function Card(props) {
   return (
      <div style={{margin: 10}}>
         <button onClick={() => window.alert('Emulamos que se cierra la card')}>X</button>
         <h2>name={props.name}</h2>
         <h2>status={props.status}</h2>
         <h2>species={props.species}</h2>
         <h2>gender={props.gender}</h2>
         <h2>origin={props.origin.name}</h2>
         <img src={props.image} alt='' /> 
      </div>
   );
}

