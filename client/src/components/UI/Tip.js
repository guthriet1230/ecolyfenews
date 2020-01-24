import React from 'react';

function TipCard(props) {
    return (
        <>
            <div id='tip-card'>
                <div className='tip-card-half'>
                    <img id='tip-card-image' src={props.image} alt='Tip Pic' />
                </div>
                <div id='tip-gutter-green' />
                <div className='tip-card-half'>
                    <div id='tip-card-content'>
                        <h1 id='tip-card-header'>{props.title}</h1>
                        <p id='tip-card-subheader'>{props.subheader}</p>
                    </div>

                    <div id='tip-card-footer'>
                        <div className='tip-footer-column'>
                            <h2 id='tip-card-author'>{props.author}</h2>
                            <p id='tip-card-date'>{props.date}</p>
                        </div>

                        <div></div>
                    </div>

                </div>
            </div>
            <div id='tip-bottom-border' />
        </>
    )
}

export default TipCard