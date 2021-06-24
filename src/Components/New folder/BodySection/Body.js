import React from 'react';
import {
    Link
} from "react-router-dom";
import car from '../../images/vehicles/car.PNG'
import bus from '../../images/vehicles/bus.PNG'
import bike from '../../images/vehicles/bike.PNG'
import train from '../../images/vehicles/train.PNG'
import './Body.css'
import { Col, Row } from 'react-bootstrap';


const Body = () => {
    return (
        <>
            <div className="cardContainer">
                <Row style={{ margin: '0px' }}>
                    <Col>
                        <Link to='/car'><img className='card_section' src={car} alt="" /></Link>
                    </Col>
                    <Col>
                        <Link to='/bus'><img className='card_section' src={bus} alt="" /></Link>
                    </Col>
                    <Col>
                        <Link to='/bike'><img className='card_section' src={bike} alt="" /></Link>
                    </Col>
                    <Col>
                        <Link to='/train'><img className='card_section' src={train} alt="" /></Link>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Body;