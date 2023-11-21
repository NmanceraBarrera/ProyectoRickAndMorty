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



    return <div className='display'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" />
        <form onSubmit={handleSubmit} >
            <div className = "container">
            <label >Email</label>
            <input
                type='email'
                name="email"
                value={userData.email}
                onChange={handleChange}>
            </input>
            <p>{errors.email ? errors.email : null}</p>
            <label >Password</label>
            <input
                type='password'
                name="password"
                value={userData.password}
                onChange={handleChange}>
            </input>
            <p>{errors.password ? errors.password : null}</p>
            <button type='submit' 
            onSubmit={handleSubmit}
            disabled = {errors.email|| errors.password} >Submit</button>
            </div>
        </form>
    </div>
        ;
}