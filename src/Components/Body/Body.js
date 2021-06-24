import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData.json'
import './Body.css'

const Body = () => {
    return (
        <>
            <Row>
                {
                    fakeData.map(dt => (
                        <>
                            <Col style={{textAlign:'center'}} id="col">
                                <Link to={`/ride/${dt.name}`}><img id="vehicles_img" src={dt.image} alt="" /></Link>
                            </Col>
                        </>
                    ))
                }
            </Row>
        </>
    );
};

export default Body;