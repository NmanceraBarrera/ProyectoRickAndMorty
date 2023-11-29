import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  const URL = "http://localhost:3001/rickandmorty/character";
  // const API_KEY = "henrystaff";

  useEffect(() => {
    axios(`${URL}/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
  }, [id]);

  return (
    <div>
      {character.name && (
        <div>
          <h2>Name: {character.name}</h2>
          <h2>Status: {character.status}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin && character.origin.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      )}
    </div>
  );
}
