import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../UI/Button'

class Navigation extends Component {

    renderContent() {
        switch (this.props.auth.data) {
            case null:
                return;
            case false || "":
                return (
                    <Button href='/auth/google'>Login</Button>
                );
            default:
                return <p><a href='/api/logout' className='no-text-style'>Logout</a></p>;
        }
    }

    render() {
        console.log(this.props.auth)
        return (
            <nav id="nav">
                <div className='nav-column'>
                    <Link
                        // to {this.props.auth ? '/profile' : '/'}
                        to='/'
                        style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={require('../../assets/logos/Logo_Nav.png')} id='navigation-logo' alt='EcoLyfe Logo' />
                        <h1>EcoLyfe News</h1>
                    </Link>
                </div>
                <div className='nav-column' id='nav-content'>
                    <Link to='/featured' style={{ textDecoration: 'none' }}><p>Featured</p></Link>
                    <Link to='/branches' style={{ textDecoration: 'none' }}><p>Branches</p></Link>
                    <Link to='/about' style={{ textDecoration: 'none' }}><p>About</p></Link>
                    {this.renderContent()}
                    {/* <p><a href='/auth/google'>Login</a></p> */}
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth }
}
export default connect(mapStateToProps)(Navigation);
