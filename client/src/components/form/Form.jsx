import React, { useEffect, useState } from "react";
import style from "./form.module.css";
import validate from "../../utilities/Validation";

export default function Form(props) {
  // const location = useLocation()
  // location.pathname
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.body.style.backgroundImage = `url(
      'https://images8.alphacoders.com/909/909638.png'
    )`;
    return () => {
      document.body.style.backgroundImage = null;
    };
  }, []);

  const [errors, setErrors] = useState({
    email: "Ingrese su email",
    password: "Ingrese su password",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.login(userData);
  }

  return (
    <div className={style.display}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" />
      <form onSubmit={handleSubmit}>
        <div className={style.container}>
          <label className={style.label}>Email</label>
          <input
            className={style.input}
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          ></input>
          <p>{errors.email ? errors.email : null}</p>
          <label className={style.label}>Password</label>
          <input
            className={style.input}
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          ></input>
          <p>{errors.password ? errors.password : null}</p>
          <button
            className={style.enviar}
            type="submit"
            onSubmit={handleSubmit}
            disabled={errors.email || errors.password}
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
