import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./nav.module.css";

export default function Nav(props) {
  return (
    <div className={style.Barra}>
      <div className={style.containerButton}>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>

        <NavLink to="/about">
          <button>About</button>
        </NavLink>

        <NavLink to="/favorites">
          <button>Favorites</button>
        </NavLink>
      </div>

      <SearchBar deleteAll={props.deleteAll} onSearch={props.onSearch} />

      <button className={style.logout} onClick={props.logout}>
        Logout
      </button>
    </div>
  );
}
