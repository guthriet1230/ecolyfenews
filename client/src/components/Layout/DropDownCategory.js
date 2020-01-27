import React from 'react';
// import DropDownArrow from '../UI/DropDownArrow'

function DropDownMenuCategory(props) {
    return (
        <div className="dropdown" id='dropdown-category'>
            <button className="dropbtn">
                <div id='category-button'>
                    <h1 id='branches'>Branches</h1>
                    {/* <DropDownArrow style={{ marginLeft: 55 }} /> */}
                </div>
            </button>
            <div className="dropdown-content">
                <div className='dropdown-item'>
                    <div className='dropdown-icon-container'>
                        <img src={require('../../assets/branchIcons/recycling.png')} className='dropdown-icon' alt='Recycling Icon' />
                    </div>
                    <div className='dropdown-label-container'>
                        <a href="/profile">Recycling</a>
                    </div>
                </div>

                <div className='dropdown-item'>
                    <div className='dropdown-icon-container'>
                        <img src={require('../../assets/branchIcons/water.png')} className='dropdown-icon' alt='Water Icon' />
                    </div>
                    <div className='dropdown-label-container'>
                        <a href="/articles">Water</a>
                    </div>
                </div>

                <div className='dropdown-item'>
                    <div className='dropdown-icon-container'>
                        <img src={require('../../assets/branchIcons/airPollution.png')} className='dropdown-icon' alt='Air Icon' />
                    </div>
                    <div className='dropdown-label-container'>
                        <a href="/articles">Air Pollution</a>
                    </div>
                </div>

                <div className='dropdown-item'>
                    <div className='dropdown-icon-container'>
                        <img src={require('../../assets/branchIcons/waste.png')} className='dropdown-icon' alt='Waste Icon' />
                    </div>
                    <div className='dropdown-label-container'>
                        <a href="/articles">Waste</a>
                    </div>
                </div>

                <div className='dropdown-item'>
                    <div className='dropdown-icon-container'>
                        <img src={require('../../assets/branchIcons/environment.png')} className='dropdown-icon' alt='Environment Icon' />
                    </div>
                    <div className='dropdown-label-container'>
                        <a href="/api/logout">Environment</a>
                    </div>
                </div>

                <div className='dropdown-item'>
                    <div className='dropdown-icon-container'>
                        <img src={require('../../assets/branchIcons/energy.png')} className='dropdown-icon' alt='Energy Icon' />
                    </div>
                    <div className='dropdown-label-container'>
                        <a href="/api/logout">Energy</a>
                    </div>
                </div>

                <div className='dropdown-item'>
                    <div className='dropdown-icon-container'>
                        <img src={require('../../assets/branchIcons/innovation.png')} className='dropdown-icon' alt='Innovation Icon' />
                    </div>
                    <div className='dropdown-label-container'>
                        <a href="/api/logout">Innovation</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDownMenuCategory