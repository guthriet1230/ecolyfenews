import React, { Component } from 'react';
import Container from '../components/UI/Container';
import PageHeader from '../components/UI/PageHeader';

class BranchesPage extends Component {
    render() {
        return (
            <Container id="branches-page">
                <PageHeader>
                    <img src={require('../assets/icons/branches_white.png')} className='page-icon' />
                    <h1>Branches</h1>
                </PageHeader>
            </Container>
        );
    }
}

export default BranchesPage;
