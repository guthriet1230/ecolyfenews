import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import DropDownArrow from '../UI/DropDownArrow';
import DropDownCategory from '../Layout/DropDownCategory'
import moment from 'moment'

function LandingHeader(props) {
    return (
        <Row id='landing-header'>
            <Col md={8} className='landing-subhead'>

                <img src={props.icon} className='landing-subhead-image' alt='today icon' />
                <h1>{moment().format('MMM Do, YYYY')}</h1>

                {/* <div className='hr' /> */}
            </Col>
            <Col md={4} className='landing-subhead' id='right'>
                <DropDownCategory>
                    {/* <h1>Branches</h1>
                    <DropDownArrow /> */}
                </DropDownCategory>
            </Col>
        </Row>
    )
}
export default LandingHeader