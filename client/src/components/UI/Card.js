import React from 'react';

function Card(props) {
    return (
        <div id='card'>
            <div className='card-half'>
                <img id='card-image' src={props.image} alt={props.title} />
            </div>
            <div className='card-half'>
                <div id='card-content'>
                    <h1 id='card-header'>{props.title}</h1>
                    <p id='card-subheader'>{props.subheader}</p>
                </div>

                <div id='card-footer'>
                    <div className='footer-column'>
                        <h2 id='card-author'>{props.author}</h2>
                        <p id='card-date'>{props.date}</p>
                    </div>

                    <div></div>
                </div>

            </div>
        </div>
    )
}

export default Card