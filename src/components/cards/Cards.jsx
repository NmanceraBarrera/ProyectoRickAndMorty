import React from "react";
import Card from "../card/Card";
import style from "./cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>
      {!characters.length ? (
        <h2>Por favor agregue un personaje por su id...</h2>
      ) : (
        characters.map((character) => (
          <Card onClose={onClose} key={character.id} {...character} />
        ))
      )}
    </div>
  );
}
