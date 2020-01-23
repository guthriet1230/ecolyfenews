import React from 'react';
import { Row, Col } from 'react-bootstrap'

function LandingHeader(props) {
    return (
        <Row>
            <Col md={8}>
                <div className='landing-subhead'>
                    <img src={props.icon} className='landing-subhead-image' alt='today icon' />
                    <h1>{props.title}</h1>
                </div>
                <div className='hr' />
            </Col>
            <Col md={4}>
                <div className='landing-subhead'>
                    <img src={require('../../assets/icons/leaflet_nobackground.png')} alt='leaflet icon' className='landing-subhead-image' />
                    <h1>Tips</h1>
                </div>
                <div className='hr' />
            </Col>
        </Row>
    )
}
export default LandingHeader