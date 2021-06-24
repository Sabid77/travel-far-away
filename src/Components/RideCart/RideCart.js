import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from "../../fakeData.json"
import GoogleMapComp from '../GoogleMapComp/GoogleMapComp';
import NavBar from '../Header/NavBar/NavBar';
import './RiderCart.css'
import { FaUserFriends } from "react-icons/fa";




const RideCart = () => {
    const { cart } = useParams();
    const riderCart = fakeData.find(dt => dt.name === cart);
    const { id, name, image, count, price } = riderCart.Categories[0];



    return (
        <>
            <NavBar />
            <hr />
            <Row>
                <Col sm={4}>
                    <div className="searchSection">
                        <div className="destination">
                            <h5>
                                From:
                           </h5>
                            <h5>
                                To:
                           </h5>

                        </div>
                        <div id={id} className="cartSec">
                            <img src={image} alt="" id="b_r" />
                            <b id="b_r">{name}</b>
                            <b id="b_r"><FaUserFriends /> {count}</b>
                            <b id="b_r">{price}</b>
                        </div>
                        <div id={id} className="cartSec">
                            <img src={image} alt="" id="b_r" />
                            <b id="b_r">{name}</b>
                            <b id="b_r"><FaUserFriends /> {count}</b>
                            <b id="b_r">{price}</b>
                        </div>
                        <div id={id} className="cartSec">
                            <img src={image} alt="" id="b_r" />
                            <b id="b_r">{name}</b>
                            <b id="b_r"><FaUserFriends /> {count}</b>
                            <b id="b_r">{price}</b>
                        </div>
                    </div>
                </Col>
                <Col sm={8}>
                    <GoogleMapComp />
                </Col>
            </Row>



            {/* <h1>
                {
                    riderCart.name
                }
            </h1>
            <img src={riderCart.image} alt=""/> */}
        </>
    );
};

export default RideCart;