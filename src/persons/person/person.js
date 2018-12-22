import React from 'react';
import Radium from 'radium'

const person = (props) => {
    const styl = {
        border: '1px solid #aaa',
        boxShadow: '0 0 5px #999',
        borderRadius: '5px',
        display:'inline-block',
        padding:'10px',
        margin:'10px',
        // width:'100px',
        ':hover': {
            boxShadow: '0 0 20px #888'
        }
    }
    return (
        <div style={styl}>
            <p onClick={props.click}>this is {props.name}</p>
            <p> my age is {props.age}</p>
            <input onChange={props.change} value = {props.name}/>
        </div>
    )
}

export default Radium(person);