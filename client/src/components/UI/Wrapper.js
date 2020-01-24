import React from 'react';


function Wrapper(props) {
    return <div style={{ paddingTop: 60 }}>{props.children} </div>;
}
export default Wrapper