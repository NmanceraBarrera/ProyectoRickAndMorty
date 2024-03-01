import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const URL_API = import.meta.env.VITE_URL_API;

const URL = `${URL_API}/rickandmorty/character`;
// const API_KEY = "henrystaff";

export default function Detail(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${URL_API}/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
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
