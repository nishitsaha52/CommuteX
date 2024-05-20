import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import hotels from '../components/POI/hotels.gif';
import foods from '../components/POI/foods.gif';
import tours from '../components/POI/tours.gif';
import Map from "../components/POI/Map";
import './POI.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PointofInterest() {
    return (
        <div>
        <div className="poi-header">
            <Header />
            <br /><br />
            <br /><br />
            <h1>Point of Interest</h1>
            <Row className="poi-container">
                <Col sm={4} md={4} className="text-center">
                    <Card>
                        <Card.Body>
                            <Card.Title className="display-4 abt">Accommodations</Card.Title>
                            <Card.Img className="image" src={hotels} alt="hotels" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} md={4} className="text-center">
                    <Card>
                        <Card.Body>
                            <Card.Title className="display-4 abt">Restaurants</Card.Title>
                            <Card.Img className="image" src={foods} alt="foods" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} md={4} className="text-center">
                    <Card>
                        <Card.Body>
                            <Card.Title className="display-4 abt">Attractions</Card.Title>
                            <Card.Img className="image" src={tours} alt="tours" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br /><br />
            <div><Map></Map> </div>        
        </div>
        <br /><br />
        <Footer/>
        </div>  
    );
}

export default PointofInterest;
