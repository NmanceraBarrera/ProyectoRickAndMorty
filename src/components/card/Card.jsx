import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import style from "./card.module.css";

export default function Card(props) {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      dispatch(removeFav(props.id)); //! dudoso 👀
    }
    if (isFav === false) {
      setIsFav(true);
      dispatch(addFav(props)); //! dudoso 👀
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.card}>
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
          onClick={() => {
            props.onClose(props.id);
          }}
        >
          X
        </button>
      </div>
      <img src={props.image} alt="" />

      <h4>Id: {props.id}</h4>

      <Link to={`/detail/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      {/* <h2>status={props.status}</h2> */}
      <h4>{props.species}</h4>

      <h4>{props.gender}</h4>

      {/* <h2>origin={props.origin.name}</h2> */}
      <h2></h2>
    </div>
  );
}
