import React from 'react';

const cockpit = (props) =>{
    return (
        <div>
            <h3>INDICATOR</h3>
            <button onClick={props.hideHandler} >CLICK</button>
        </div>
    )
}

export default cockpit;