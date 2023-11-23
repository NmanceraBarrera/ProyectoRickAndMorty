import Error from './components/error/Error.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import axios from 'axios';
import About from './components/about/About.jsx'
import Nav from "./components/nav/Nav.jsx";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Form from './components/form/Form.jsx';
import "./app.css";
import Favorites from './components/favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/action.js';



const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const location = useLocation();
   const dispatch = useDispatch();

   const [access,setAccess] = useState (false);
   const email = "a@a.a";
   const password = "123456";

   function login(userData) {
      if(email===userData.email && password === userData.password){
         setAccess(true);
         navigate ("/home");
      }
      else{
         alert ("Credenciales incorrectas!")
      }
   }
   function logout(){
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


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
      dispatch(removeFav(id))
   }



   return (
      <div className='App'>
         
         
         {location.pathname === '/'? null : <Nav onSearch={onSearch} logout={logout}/> }


         <Routes>
            <Route path='/favorites' element={<Favorites/>} onClose={onclose}/>
            <Route path='/' element={<Form login={login}/>}> </Route>         
            <Route path='/home'
             element={<Cards characters={characters} 
             onClose ={onClose} 

             />}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
            <Route path='*' element={<Error/>}></Route>         
         </Routes>

      </div>
   );
}
export default App;
   