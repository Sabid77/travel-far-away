import React from 'react';
import NavBar from '../Header/NavBar/NavBar';
import Facebook from './Facebook/Facebook';
import Google from './Google/Google';
import Signup from './Signup/Signup';

const Login = () => {
    return (
        <>            
            <NavBar />
            <hr />
            <div style={{ textAlign: 'center' }} className="signUpSec">
                <Signup />
                <p>------------or------------</p>
                <div style={{margin:'auto', textAlign:'center'}} className="d-flex justify-content-center">
                    <Google />
                    <Facebook />
                </div>
            </div>
        </>
    );
};

export default Login;