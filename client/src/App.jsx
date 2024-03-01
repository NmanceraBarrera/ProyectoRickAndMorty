import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./app.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Error from "./components/error/Error.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/action.js";
const URL_API = import.meta.env.VITE_URL_API;

function App() {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // const email = "a@a.a";
  // const password = "123456";
  useEffect(() => {
    !access && navigate("/");
    // !access && navigate('/home');
  }, [access]);

  const onSearch = async (id) => {
    try {
      const characterId = characters.filter((char) => char.id === Number(id));
      if (characterId.length) {
        return alert(`El personaje con id ${id} ya existe`);
      }
      navigate("/home");
      const { data } = await axios(`${URL_API}/rickandmorty/character/${id}`);
      if (data.name) {
        setCharacters((oldChars) => [data, ...oldChars]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      throw error;
    }
  };

  const onClose = (id) => {
    setCharacters((characters) =>
      characters.filter((char) => char.id !== Number(id))
    );
    dispatch(removeFav(id));
  };

  const deleteAll = () => {
    setCharacters([]);
  };

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = `${URL_API}/rickandmorty/login/`;
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

  return (
    <div className="App">
      {location.pathname === "/" ? null : (
        <Nav deleteAll={deleteAll} onSearch={onSearch} logout={logout} />
      )}

      <Routes>
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
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/About" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}
export default App;
