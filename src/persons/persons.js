import React from 'react';
import Person from './person/person';
import Radium,{StyleRoot} from 'radium';

const persons = (props) => {
    const styl = {
        padding: '10px',
        // backgroundColor: '#666',
        borderRadius:'5px',
        boxShadow:'0 0 5px #333 inset',
        display:'inline-block',
        marginTop:'10px'
        // width:'0'
    }
    if(props.states.show){
        return (
            <StyleRoot>
                <div style={styl}>
                    {
                        props.states.property.map((p,indx) => {
                            return (
                                <Person key={p.key} name={props.states.property[indx].name} age={props.states.property[indx].age} click={alert}
                                 change={(event)=>props.change(event,p.key)} 
                                 click = {() => props.click(indx)}
                                 />
                            )
                        })
                    }
                </div>
                </StyleRoot>
        )
    }
    return null;
};

export default Radium(persons);