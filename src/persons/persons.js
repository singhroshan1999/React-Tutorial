import React from 'react';
import Person from './person/person';
import Radium,{StyleRoot} from 'radium';

const persons = (props) => {
    if(props.states.show){
        return (
            <StyleRoot>
                <div>
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