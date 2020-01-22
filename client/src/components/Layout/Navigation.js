import React from 'react';

const Navigation = () => {

    return (
        <navigation id="nav">
            <div className='nav-column'>
                <img src={require('../../assets/images/Logo_WhiteBackground.png')} id='navigation-logo' />
                <h1>EcoLyfe News</h1>
            </div>
            <div className='nav-column' id='nav-content'>
                <p>Products</p>
                <p>Brances</p>
                <p>About</p>
                <p><a href='/auth/google'>Login</a></p>
            </div>
        </navigation>
    );
}

export default Navigation;
