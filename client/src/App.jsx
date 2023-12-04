import Error from "./components/error/Error.jsx";
import Cards from "./components/cards/Cards.jsx";
import Detail from "./components/Detail/Detail.jsx";
import axios from "axios";
import About from "./components/about/About.jsx";
import Nav from "./components/nav/Nav.jsx";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Form from "./components/form/Form.jsx";
import "./app.css";
import Favorites from "./components/favorites/Favorites.jsx";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/action.js";

// const URL = "http://localhost:3001/rickandmorty/character";
// const API_KEY = "henrystaff";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  // const email = "a@a.a";
  // const password = "123456";

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      if (access === true) {
        setAccess(data);
        access && navigate("/home");
      } else {
        alert("Credenciales Incorrectas");
      }
    } catch (error) {
      throw error;
    }
  };

  function logout() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
    // !access && navigate('/home');
  }, [access]);

  const onSearch = async (id) => {
    const characterId = characters.filter((char) => char.id === Number(id));
    if (characterId.length) {
      return alert(`El personaje con id ${id} ya existe`);
    }
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      throw error;
    }
  };

  const onClose = (id) => {
    setCharacters((prevCharacters) =>
      prevCharacters.filter((char) => char.id !== Number(id))
    );
    dispatch(removeFav(id));
  };

  const deleteAll = () => {
    setCharacters([]);
  };

  return (
    <div className="App">
      {location.pathname === "/" ? null : (
        <Nav deleteAll={deleteAll} onSearch={onSearch} logout={logout} />
      )}

      <Routes>
        <Route path="/favorites" element={<Favorites />} onClose={onclose} />
        <Route
          path="/"
          element={<Form login={login} style={{ PageTransitionEvent }} />}
        >
          {" "}
        </Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}
export default App;
