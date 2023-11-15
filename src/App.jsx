import Cards from './components/Cards.jsx';
import axios from 'axios';
import Nav from "./components/Nav.jsx";
import React, { useState } from "react";

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      const characterId = characters.filter = (
         char => char.id === Number(id)
      )
      if(characterId.length){
         return alert(`¡El personaje con is ${id} ya existe!`)
      }
      axios(`${URL}/${id}?key=${API_KEY}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose ={onClose} />

      </div>
   );
}

export default App;

