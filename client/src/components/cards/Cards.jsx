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
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
          />
        ))
      )}
    </div>
  );
}
