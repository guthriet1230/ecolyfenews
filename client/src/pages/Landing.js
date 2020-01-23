import React, { Component } from 'react';
import SubHeader from '../components/UI/LandingHeader';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../components/UI/Card';
import TipCard from '../components/UI/Tip';

class LandingPage extends Component {
    render() {
        return (
            <div id="landing-page">
                <Container nogutter>
                    <SubHeader
                        title="Today's Articles"
                        icon={require('../assets/icons/calendar_nobackground.png')}
                    />
                    <Row>
                        <Col md={8} id='landing-article-column' >
                            <Card
                                image={require('../assets/images/backgrounds/about_bg.jpg')}
                                title='Trash is rubish'
                                subheader={"How your trash is really so trash, it's trashy"}
                                author='Tyler Guthrie'
                                date="Jan 14th '20" />
                            <Card
                                image={require('../assets/images/backgrounds/about_bg.jpg')}
                                title='Trash is rubish'
                                subheader={"How your trash is really so trash, it's trashy"}
                                author='Tyler Guthrie'
                                date="Jan 14th '20" />
                            <Card
                                image={require('../assets/images/backgrounds/about_bg.jpg')}
                                title='Trash is rubish'
                                subheader={"How your trash is really so trash, it's trashy"}
                                author='Tyler Guthrie'
                                date="Jan 14th '20" />
                            <Card
                                image={require('../assets/images/backgrounds/about_bg.jpg')}
                                title='Trash is rubish'
                                subheader={"How your trash is really so trash, it's trashy"}
                                author='Tyler Guthrie'
                                date="Jan 14th '20" />
                            <Card
                                image={require('../assets/images/backgrounds/about_bg.jpg')}
                                title='Trash is rubish'
                                subheader={"How your trash is really so trash, it's trashy"}
                                author='Tyler Guthrie'
                                date="Jan 14th '20" />
                        </Col>
                        <Col md={4} id='landing-tip-column' >
                            <TipCard
                                image={require('../assets/images/backgrounds/about_bg.jpg')}
                                title='Trash is rubish'
                                subheader={"How your trash is really so trash, it's trashy"}
                                author='Tyler Guthrie'
                                date="Jan 14th '20" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LandingPage;
