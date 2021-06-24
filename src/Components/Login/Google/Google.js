import React, { useContext } from 'react';
import Configuration from "../Configuration"
import firebase from "firebase/app";
import "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { UseContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(Configuration);





const Google = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UseContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handelGoogle = () => {
        // Handel Google Button    
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                console.log(res.user.email);
                setLoggedInUser(res.user);
                history.replace(from);
            })
        .catch ((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
})

}


return (
    <>
        <button style={
            {
                border: 'none',
                borderRadius: '5px',
                outline: 'none',
                padding: '5px 10px 10px 10px',
                backgroundColor: 'goldenrod',
                color: 'wheat',
                marginRight: '10px'
            }
        } onClick={handelGoogle}>
            <span style={{ fontSize: '1.3rem', paddingBottom: '5px' }}> <FcGoogle /> </span> Google
            </button>
    </>
);
};

export default Google;