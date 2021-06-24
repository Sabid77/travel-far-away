import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from "../../fakeData.json"
import GoogleMapComp from '../GoogleMapComp/GoogleMapComp';
import "../../App.css"
import NavBar from '../Header/NavBar/NavBar';

const Ride = () => {
    const [rideDetails, setRideDetails] = useState([]);
    const { rideInfo } = useParams();
    const history = useHistory()

    useEffect(() => {
        const riders = fakeData.find(dt => dt.name === rideInfo);
        setRideDetails(riders)
    }, [rideInfo])


    const handleSubmit = () => {
        history.push(`/riderCart/${rideDetails.name}`)
    }



    return (
        <>
            <NavBar />
            <hr />
            <Row>
                <Col sm={4}>
                    <div className="searchSection">
                        <form onSubmit={handleSubmit}>
                            <p>Pick From</p>
                            <input type="text" />
                            <br />
                            <br />
                            <p>Pick To</p>
                            <input type="text" />
                            <br />
                            <input id='searchBtn' type="submit" value="Search" />
                        </form>
                    </div>
                </Col>
                <Col sm={8}>
                    <GoogleMapComp />
                </Col>
            </Row>
        </>
    );
};

export default Ride;