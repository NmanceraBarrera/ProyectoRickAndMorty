import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import style from "./card.module.css";

export default function Card(props) {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      props.onClose(props);
      dispatch(removeFav(props.id)); //! dudoso 👀
    }
    if (isFav === false) {
      setIsFav(true);
      dispatch(addFav(props)); //! dudoso 👀
    }
  };

  useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === props.id) {
        setIsFav(true);
      }
    }
  }, [myFavorites]);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

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

  // myFavorites.forEach((fav) => {
  //   if (fav.id === props.id) {
  //     setIsFav(true);
  //   }
  // });

  // useEffect(() => {
  //   myFavorites.forEach((fav) => {
  //     if (fav.id === props.id) {
  //       setIsFav(true);
  //     }
  //   });
  // }, [myFavorites]);

  return (
    <div
      className={`${style.card} ${isFlipped ? style.flipped : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
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
        <img src={props.image} alt="" />

        <Link to={`/detail/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>

        <h4>Id: {props.id}</h4>

        <h2>{Status()}</h2>
      </div>
      {/* <div className={style.cardBack}>
        <h4>Id: {props.id}</h4>
        <h4>{props.species}</h4>

        <h4>{props.gender}</h4>
        {/* <h2>origin={props.origin.name}</h2> */}
      {/* <img src={props.image} alt="" />  */}

      {/* </div> */}
    </div>
  );
}
