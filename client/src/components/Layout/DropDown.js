import React from 'react';

function DropDownMenu(props) {
    return (
        <div className="dropdown" >
            {/* <img src={props.profileImage} id='profile-image' alt='Profile Pic' /> */}
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
                <div className='dropdown-item'>
                    <img src={require('../../assets/icons/user.png')} id='dropdown-user' alt='Profile Pic' />
                    <a href="/profile">Profile</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/icons/article.png')} id='dropdown-articles' alt='Article Pic' />
                    <a href="/new-article">New Article</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/icons/leaflet_nobackground.png')} id='dropdown-articles' alt='Leaflet Pic' />
                    <a href="/articles">New Leaflet</a>
                </div>

                <div id='hr' />
                <div className='dropdown-item'>
                    <img src={require('../../assets/icons/help_curve.png')} id='dropdown-articles' alt='Help Pic' />
                    <a href="/articles">Help</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/icons/logout.png')} id='dropdown-logout' alt='User Pic' />
                    <a href="/api/logout">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default DropDownMenu