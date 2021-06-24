import React, { useContext, useState } from 'react';
import './Signup.css';
import firebase from "firebase/app";
import { UseContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Signup = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UseContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        name: '',
        email: '',
        image: '',
        password: ''
    })

    const submitForm = (e) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = {...user};
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log(res);
                })
                .catch(error => {
                    const newUserInfo = {...user};
                    newUserInfo.error = error.message;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault();
    }

    const handleChange = (e) => {
        let isFormValid = true;
        if (e.target.name === "name") {
            isFormValid = e.target.value;
        }
        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 8;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && isPasswordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }



    return (
        <div>
            <div className="form_section">
                <form onSubmit={submitForm}>
                    <input type="text" onBlur={handleChange} placeholder="Your Name*" name="name" required />
                    <br />
                    <input type="email" onBlur={handleChange} placeholder="Your Email*" name="email" required />
                    <br />
                    <input type="password" onBlur={handleChange} placeholder="Your Password*" name="password" required />
                    <br />
                    <input style={
                        {
                            backgroundColor: 'green',
                            color: 'white',
                            width: "50%",
                            borderRadius: "10px",
                            border: "none",
                            outline: 'none'
                        }
                    } type="submit" value="Sign Up" />
                </form>
                <p style={{color:'red'}}>{user.error}</p>
            </div>
        </div>
    );
};

export default Signup;