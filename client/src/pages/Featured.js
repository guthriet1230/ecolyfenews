import React, { Component } from 'react';
import PageHeader from '../components/UI/PageHeader';
import Container from '../components/UI/Container';

class FeaturedPage extends Component {
    render() {
        return (
            <Container id="featured-page">
                <PageHeader>
                    <img src={require('../assets/icons/featured_white.png')} className='page-icon' />
                    <h1>Featured</h1>
                </PageHeader>
            </Container>
        );
    }
}

export default FeaturedPage;
