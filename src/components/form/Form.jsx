import React, { useState } from 'react';
import "./form.css";
import validate from '../../utilities/Validation';


export default function Form(props) {

    // const location = useLocation()
    // location.pathname
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    }
    );

    const [errors, setErrors] = useState({})

    function handleChange(event) {
        const { name, value } = event.target
        setUserData({
            ...userData,
            [name]: value
        }
        );
        setErrors(
            validate({
                ...userData,
                [name]: value
            }
            )
        );
    };

    function handleSubmit(event) {
        event.preventDefault();
        props.login(userData);
    }



    return <div>
        <form onSubmit={handleSubmit} >
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" />
            <br />
            <br />

            <label style={{ paddingRight: 10 }}>Email</label>

            <input
                type='email'
                name="email"
                value={userData.email}
                onChange={handleChange}>

            </input>

            <p style={{ color: "coral" }}>{errors.email ? errors.email : null}</p>


            <label style={{ paddingLeft: 10, paddingRight: 10 }}>password</label>
            <input
                type='password'
                name="password"
                value={userData.password}
                onChange={handleChange}>

            </input>
            <p style={{ color: "coral" }}>{errors.password ? errors.password : null}</p>
            <br />
            <br />
            <button type='submit' onSubmit={handleSubmit}>Submit</button>
        </form>
    </div>
        ;
}