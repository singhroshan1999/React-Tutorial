import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>this is {props.name}</p>
            <p> my age is {props.age}</p>
            <input onChange={props.change} value = {props.name}/>
        </div>
    )
}

export default person;