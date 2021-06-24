import React, { createContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Pages/Home/Home"
import Destination from './Components/Pages/Destination/Destination';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact';
import Ride from './Components/Ride/Ride';
import RideCart from './Components/RideCart/RideCart';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const UseContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <UseContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Container>          
          <Router>
            {/* Switch Comp */}
            <Switch>            
              <Route exact path='/'>
                <Home />
              </Route>
              <PrivateRoute path="/destination">
                <Destination />
              </PrivateRoute>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <PrivateRoute path="/ride/:rideInfo">
                <Ride />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/riderCart/:cart">
                <RideCart />
              </Route>



              {/* Error Route */}
              <Route path='/*'>
                <h1 style={{ color: 'red' }}>404 Error</h1>
              </Route>
            </Switch>

          </Router>
        </Container>
      </UseContext.Provider>
    </>
  );
};

export default App;