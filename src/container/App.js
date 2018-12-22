import React, { Component } from 'react';
import './App.css';
import Cockpit from '../cockpit/cockpit';
import Persons from '../persons/persons.js';
import Radium from 'radium';
import WithClass from '../hoc/withClass';
import PropType from 'prop-type';
class App extends Component {

  constructor(props){
    super();
    console.log("[App.js]>constructor()",props);
    this.state = {

      property: [
        {name:"roshan",age:"12",key:"213123"},
        {name:"singh",age:"23",key:"fsdfa"},
        {name:"ideapad",age:"34",key:"bnmvn"},
      ],
      show:true,
      count:0
    };
  }
  componentWillMount(){

    console.log("[App.js]>componentWillMount()");
  }
componentDidMount(){

  console.log("[App.js]>componentDiDMount()");
}


  modifyCardHandler = (event,key)=>{
const indx = this.state.property.findIndex((p) => {
  return p.key == key
});
const person = {...this.state.property[indx]};
person.name = event.target.value;
const persons = [...this.state.property];
persons[indx] = person;
this.setState({property:persons});

  }

deleteHandler = (indx) => {
  const property = [...this.state.property];
  property.splice(indx,1);
  this.setState({property:property});
}
hideHandler = ()=>{
  this.setState((prevState,props)=>{
    return {
      show:!prevState.show,
      count:prevState.count +1}
    });
}
  render() {
    console.log("[App.js]>render()");
    return (
      <WithClass classes = "App">

      <Cockpit hideHandler = {this.hideHandler} />
      <Persons change={this.modifyCardHandler} click={this.deleteHandler} states = {this.state} />
       
     </WithClass>
    );
  }
}

App.propTypes = {
  prop1 : PropType.string,
  prop2 : PropType.number
}

export default Radium(App);
