import React, { useState } from "react";
import Detail from "../detail/Detail"; // Asegúrate de que la ruta del archivo sea correcta
import Card from "../card/Card"; // Asegúrate de que la ruta del archivo sea correcta
import style from "./flipCard.module.css"; // Agrega el estilo para la tarjeta de volteo

export default function FlipCard({ character }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${style.flipCard} ${isFlipped ? style.flipped : ""}`}
      onClick={handleCardClick}
    >
      {character && character.id && (
        <>
          <div className={`${style.card} ${style.cardFront}`}>
            <Card
              id={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
            />
          </div>
          <div className={`${style.card} ${style.cardBack}`}>
            <Detail id={character.id} />
          </div>
        </>
      )}
    </div>
  );
}
