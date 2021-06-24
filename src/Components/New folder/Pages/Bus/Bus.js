import React from 'react';
import { Col, Row } from 'react-bootstrap';
import GoogleMapComp from '../Car/GoogleMapComp';

const Bus = () => {
    return (
        <div style={{ borderTop: '1px solid gray', paddingTop: '10px' }}>
            <Row>
                <Col sm={4}>
                    <div className="searchSection">
                        <form>
                            <p>Pick From</p>
                            <input type="text" />
                            <br />
                            <br />
                            <p>Pick To</p>
                            <input type="text" />
                            <br />
                            <button id='searchBtn'>Search</button>
                        </form>
                    </div>
                </Col>
                <Col sm={8}>
                    <GoogleMapComp />
                </Col>
            </Row>
        </div>
    );
};

export default Bus;