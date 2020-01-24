import React from 'react';
import DropDownArrow from '../UI/DropDownArrow'

function DropDownMenu(props) {
    return (
        <div className="dropdown" >
            <button className="dropbtn">
                <div id='category-button'>
                    <h1>Branches</h1>
                    {/* <DropDownArrow style={{ marginLeft: 55 }} /> */}
                </div>
            </button>
            <div className="dropdown-content">
                <div className='dropdown-item'>
                    <img src={require('../../assets/branchIcons/recycling.png')} className='dropdown-icon' />
                    <a href="/profile">Recycling</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/branchIcons/water.png')} className='dropdown-icon' />
                    <a href="/articles">Water</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/branchIcons/airPollution.png')} className='dropdown-icon' />
                    <a href="/articles">Air Pollution</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/branchIcons/waste.png')} className='dropdown-icon' />
                    <a href="/articles">Waste</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/branchIcons/environment.png')} className='dropdown-icon' />
                    <a href="/api/logout">Environment</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/branchIcons/energy.png')} className='dropdown-icon' />
                    <a href="/api/logout">Energy</a>
                </div>

                <div className='dropdown-item'>
                    <img src={require('../../assets/branchIcons/innovation.png')} className='dropdown-icon' />
                    <a href="/api/logout">Innovation</a>
                </div>
            </div>
        </div>
    )
}

export default DropDownMenu