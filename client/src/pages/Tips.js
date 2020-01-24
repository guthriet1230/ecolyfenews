import React, { Component } from 'react';
import Wrapper from '../components/UI/Wrapper';

import PageHeader from '../components/UI/PageHeader';

class BranchesPage extends Component {
    render() {
        return (
            <Wrapper id="branches-page">
                <PageHeader>
                    <img src={require('../assets/icons/branches_white.png')} className='page-icon' alt='branches icon' />
                    <h1>Branches</h1>
                </PageHeader>
            </Wrapper>
        );
    }
}

export default BranchesPage;
