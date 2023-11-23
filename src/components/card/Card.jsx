import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";


export default function Card(props) {
   const myFavorites = useSelector(state =>state.myFavorites)
   const dispatch = useDispatch();

   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav === true){
         setIsFav(false)
         dispatch(removeFav(props.id))//! dudoso 👀
      }
      if (isFav === false){
         setIsFav(true)
         dispatch(addFav(props))//! dudoso 👀
      }

   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);

   return (
      
      <div style={{margin: 10}}>

         {isFav ? (
         <button onClick={handleFavorite}>❤️</button>)
         :
         (<button onClick={handleFavorite}>🤍</button>)}

         <button onClick={() => {props.onClose(props.id)}} style={{display:"flex",backgroundColor:"red",color:"black",borderBottomColor:"black",borderStyle:"none",marginTop:0,marginLeft:285,}}>X</button>

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

