import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import style from "./card.module.css";
import Detail from "../detail/Detail";

export default function Card(props) {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.onClose(props.id);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === props.id) {
        setIsFav(true);
      }
    }
  }, [myFavorites]);

  const Status = () => {
    if (props.status === "Alive") {
      return <p className={style.statusAlive}> Alive 💚 </p>;
    }
    if (props.status === "unknown") {
      return <p className={style.statusUnknown}> unknown 🤍 </p>;
    }
    if (props.status === "Dead") {
      return <p className={style.statusDead}> Dead 🖤 </p>;
    }
  };

  const handleCardClick = (event) => {
    // Verifica si el clic fue en un botón y evita girar la tarjeta
    if (event.target.tagName.toLowerCase() === "button") {
      return;
    }

    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${style.card} ${isFlipped ? style.flipped : ""}`}
      onClick={handleCardClick}
    >
      <div className={style.cardFront}>
        <div className={style.containerButtons}>
          {isFav ? (
            <button className={style.heart} onClick={handleFavorite}>
              ❤️
            </button>
          ) : (
            <button className={style.heart} onClick={handleFavorite}>
              🤍
            </button>
          )}

          <button
            className={style.close}
            onClick={() => props.onClose(props.id)}
          >
            X
          </button>
        </div>
        <h4>Id: {props.id}</h4>
        <div className={style.lucho}>
          <img src={props.image} alt="" />
        </div>
      </div>
      {/* <img
        className={style.imageFotcard}
        src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
        alt="img fotcard"
      /> */}
      <div className={style.cardBack}>
        <h3>{props.name}</h3>
        <h4>Gender: {props.gender}</h4>
        <h4>
          Status:{} {Status()}
        </h4>
        <h4>Origin: {props.origin}</h4>
        <h4>Species: {props.species}</h4>
        {/* <img src={props.image} alt="" /> */}
      </div>
    </div>
  );
}
