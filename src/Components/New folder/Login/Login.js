import React, { useState } from 'react';
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import Configuration from './Configuration'

firebase.initializeApp(Configuration);


const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const FbProvider = new firebase.auth.FacebookAuthProvider();

    const handelBlur = (e) => {
        console.log(e.target.name, e.target.value);

    }

    const handelSubmit = (e) => {
    }

    // Facebook SingIn 
    const handleFacebookSingIn = () => {
        firebase
            .auth()
            .signInWithPopup(FbProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // The signed-in user info.
                var user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var accessToken = credential.accessToken;

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

                // ...
            });
    }
    // Google Popup SingIn 
    const handleGoogleSingIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    return (
        <>
            <div className="login_form">
                <form onSubmit={handelSubmit}>
                    <h4>
                        Create An Account
                    </h4>
                    <input type="text" onBlur={handelBlur} name="UserName" placeholder="User Name*" />
                    <br />
                    <input type="email" onBlur={handelBlur} name="Email" placeholder="Email*" />
                    <br />
                    <input type="password" onBlur={handelBlur} name="Password" placeholder="Password" />
                    <br />
                    <input type="password" onBlur={handelBlur} name="ConfirmPassword" placeholder="Confirm Password" />
                    <br />
                    <button type="submit">Create Account</button>
                </form>
                <p><small>I have already an account <a href="" style={{ color: 'red' }}>Login</a></small></p>
            </div>
            <div className="singUpSec">
                <button onClick={handleFacebookSingIn} id='facebook_login'>
                    <Row>
                        <Col lg={2}>
                            <p style={{ color: 'blue' }}><FaFacebookF /></p>
                        </Col>
                        <Col lg={10}>
                            <p>Continue with Facebook</p>
                        </Col>
                    </Row>
                </button>
                <button onClick={handleGoogleSingIn} id='google_login'>
                    <Row >
                        <Col lg={2}>
                            <p> <FcGoogle /></p>
                        </Col>
                        <Col lg={10}>
                            <p>Continue with Google</p>
                        </Col>
                    </Row>
                </button>
            </div>
        </>
    );
};

export default Login;