import React, { Component } from 'react';
import './App.css';
import Cockpit from '../cockpit/cockpit';
import Persons from '../persons/persons.js';

class App extends Component {
  state = {

    property: [
      {name:"roshan",age:"12",key:"213123"},
      {name:"singh",age:"23",key:"fsdfa"},
      {name:"ideapad",age:"34",key:"bnmvn"},
    ],
    show:true
  };
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
  this.setState({show:!this.state.show});
}
  render() {
    return (
      <div className="App">

      <Cockpit hideHandler = {this.hideHandler} />
      <Persons change={this.modifyCardHandler} click={this.deleteHandler} states = {this.state} />
       
      </div>
    );
  }
}

export default App;
