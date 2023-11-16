import Error from './components/error/Error.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import axios from 'axios';
import About from './components/about/About.jsx'
import Nav from "./components/nav/Nav.jsx";
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';


const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      const characterId = characters.filter(char => char.id === Number(id))
    if(characterId.length) {
      return alert(`El personaje con id ${id} ya existe`)
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
         
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose ={onClose} />}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
            <Route path='*' element={<Error/>}></Route>         
         </Routes>

      </div>
   );
}
export default App;
   