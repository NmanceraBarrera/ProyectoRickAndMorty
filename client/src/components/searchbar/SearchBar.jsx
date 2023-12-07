import React, { useState } from "react";
import style from "./sb.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }
  //! /////////////////////////////////////////Borrar el input cuando clickeas el search
  const handleClick = (event) => {
    event.preventDefault();
    props.onSearch(id);
    setId("");
  };

  //! //////////////////////////////////////////
  return (
    <div className={style.container}>
      <input
        className={style.search}
        type="text"
        placeholder="Id..."
        onChange={handleChange}
        value={id}
      />
      <div className={style.button}>
        <button className={style.agregarButton} onClick={handleClick}>
          Agregar
        </button>
        <button
          className={style.randomButton}
          onClick={() => props.onSearch(Math.ceil(Math.random() * 826))}
        >
          Add random
        </button>
        <button className={style.deleteButton} onClick={props.deleteAll}>
          🗑
        </button>
      </div>
    </div>
  );
}
