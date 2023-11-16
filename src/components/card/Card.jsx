import React from "react";
import { Link } from "react-router-dom";


export default function Card(props) {
   return (
      <div style={{margin: 10}}>
         <button onClick={() => props.onClose(props.id)} style={{display:"flex",backgroundColor:"red",color:"black",borderBottomColor:"black",borderStyle:"none",marginTop:0,marginLeft:285,}}>X</button>
         <img src={props.image} alt='' /> 
         <h4>Id: {props.id}</h4>
         <Link to={`/detail/${props.id}`} >
         <h2 style={{backgroundColor:"yellow",display:"flex",margin:0}}>{props.name}</h2>
         </Link>
         {/* <h2>status={props.status}</h2> */}
         <h2 style={{backgroundColor:"grey",display:"flex",margin:0}}>{props.species}</h2>
         <h2 style={{backgroundColor:"grey",display:"flex",margin:0}}>{props.gender}</h2>
         {/* <h2>origin={props.origin.name}</h2> */}
         <h2></h2>
      </div>
   );
}

