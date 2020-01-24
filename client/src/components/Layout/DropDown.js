import React from 'react';

function DropDownMenu(props) {
    return (
        <div className="dropdown" >
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
                <div className='dropdown-item'>
                    <img src={require('../../assets/icons/user.png')} id='dropdown-user' />
                    <a href="/profile">Profile</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/icons/article.png')} id='dropdown-articles' />
                    <a href="/articles">New Article</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/icons/leaflet_nobackground.png')} id='dropdown-articles' />
                    <a href="/articles">New Leaflet</a>
                </div>

                <div id='hr' />
                <div className='dropdown-item'>
                    <img src={require('../../assets/icons/help_curve.png')} id='dropdown-articles' />
                    <a href="/articles">Help</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/icons/logout.png')} id='dropdown-logout' />
                    <a href="/api/logout">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default DropDownMenu