import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../UI/Button'
import DropDown from './DropDown'
// import { Container } from 'react-bootstrap'

class Navigation extends Component {
    state = {
        profileImage: ''
    }
    // renderContent() {
    //     // debugger

    //     if (this.props.auth.data) {
    //         return <Button href='/auth/google'>Login</Button>
    //     } else if (this.props.auth.data.googleImage) {
    //         return <DropDown profileImage={this.props.auth.data.googleImage} />
    //     } return <Button href='/auth/google'>Login</Button>
    // }

    // renderContent = () => async () => {
    //     await this.props.auth.data
    //     if (this.props.auth.data.googleImage) {
    //         return <DropDown profileImage={this.props.auth.data.googleImage} />

    //         //         return <Button href='/auth/google'>Login</Button>
    //         //     } else if (this.props.auth.data.googleImage) {
    //         //         return <DropDown profileImage={this.props.auth.data.googleImage} />
    //         //     }
    //         // dispatch({ type: FETCH_USER, payload: res })
    //     } return <Button href='/auth/google'>Login</Button>
    // }

    // renderContent() {
    //     switch (this.props.auth.data) {
    //         case null:
    //             return;
    //         case false || "" || {}:
    //             return
    //         case (typeof (this.props.auth.data) === 'string'):
    //             return <DropDown />
    //         default:
    //             return (
    //                 <Button href='/auth/google'>Login</Button>
    //             );
    //     }
    // }





    renderContent() {
        switch (this.props.auth.data) {
            case null:
                return;
            case false || "":
                return (
                    <Button href='/auth/google'>Login</Button>
                );
            default:
                // return <img src={this.props.auth.data.googleImage} alt='Profile Image' />
                // return <p><a href='/api/logout' className='no-text-style'>Logout</a></p>
                return <DropDown></DropDown>
        }
    }



    render() {
        console.log(this.props.auth)
        // debugger
        return (
            <nav id="nav">
                <div className='nav-column' id='nav-brand'>
                    <Link
                        // to {this.props.auth ? '/profile' : '/'}
                        to='/'
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        <img src={require('../../assets/logos/logo_nav.png')} id='navigation-logo' alt='EcoLyfe Logo' />
                        <h1>EcoLyfe News</h1>
                    </Link>
                </div>
                <div className='nav-column' id='nav-content'>
                    <Link to='/featured' className='nav-featured' style={{ textDecoration: 'none' }}><p>Featured</p></Link>
                    <Link to='/tips' className='nav-tips' style={{ textDecoration: 'none' }}><p>Tips</p></Link>
                    <Link to='/about' className='nav-about' style={{ textDecoration: 'none' }}><p>About</p></Link>
                    <div className='nav-user'>
                        {this.renderContent()}
                    </div>
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
