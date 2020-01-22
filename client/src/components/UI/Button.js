import React from 'react';

function Button(props) {
    return <a className='button no-text-style' href={props.href}><h6 className='button-text'>{props.children}</h6></a>
}

export default Button