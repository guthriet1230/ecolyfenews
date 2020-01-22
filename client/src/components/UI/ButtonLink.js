import React from 'react';

function ButtonLink(props) {
    return <Link className='no-text-style button-link' to={props.href}><h6 className='button-text'>{props.children}</h6></Link>
}

export default ButtonLink