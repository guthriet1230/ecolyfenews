import React, { Component } from 'react';
import SubHeader from '../components/UI/LandingHeader';
import { Container, Row, Col } from 'react-bootstrap';
import Wrapper from '../components/UI/Wrapper';
import Card from '../components/UI/Card';
// import TipCard from '../components/UI/Tip';

class LandingPage extends Component {
    render() {
        return (
            <Wrapper id="landing-page">
                <Container>
                    <SubHeader
                        title="Today's Articles"
                        icon={require('../assets/icons/calendar_nobackground.png')}
                    />
                    <Row>
                        <Col md={12} id='landing-article-column' >
                            <Card
                                image={require('../assets/images/backgrounds/about_bg.jpg')}
                                title='Trash is rubish'
                                subheader={"How your trash is really so trash, it's trashy"}
                                author='Tyler Guthrie'
                                date="Jan 14th '20" />
                            <p>
                                <a href='/api/articles' className='no-text-style'>Logout</a></p>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        );
    }
}

export default LandingPage;
