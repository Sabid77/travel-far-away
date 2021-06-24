import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FaFacebookF } from "react-icons/fa";


// Facebook SingIn 
const handleFacebookSingIn = () => {
    const FbProvider = new firebase.auth.FacebookAuthProvider();
    

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



const Facebook = () => {
    return (
        <>
            <button style={
                {
                    border:'none',
                    borderRadius:'5px',
                    outline:'none',
                    padding:'5px 10px 10px 10px',
                    backgroundColor:'blue',
                    color:'wheat'
                }
            } onClick={handleFacebookSingIn}><FaFacebookF /> Facebook</button>
        </>
    );
};

export default Facebook;