import React from 'react';
import './persons.css';
import Radium from 'radium';

const persons = (xyz) =>
{
    let sty = {
        backgroundColor:'white',
        border:'1px solid black',
        boxShadow:'0 0 5px #999',
        '@media (min-width:500px)':{
            boxShadow: ' 0 0 20px #f0f',
            border:'0px'
        }
    }
     return (
         <div className="persons">
     <p  onClick={xyz.click}>I am {xyz.name}. My age is {xyz.age}</p>
     <p>{xyz.children}</p>
     <input style={sty} type = "text" onChange = {xyz.change} value={xyz.name} />
     </div>
     );
     }
export default Radium(persons);
