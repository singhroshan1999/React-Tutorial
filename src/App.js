import React, { Component } from 'react';
import Persons from "./Persons/Persons";
import './App.css';
import Radium,{StyleRoot} from 'radium';
// import { ReactComponent } from '*.svg';

class App extends Component {
  state ={
    property : [
    {id:'gdfg',name:"roshan",age:'12'},
    {id:'vbcv',name:'singh',age:'23'},
    {id:'lhjk',name:'ideapad',age:'40'}
  ],
show:true  
};

  Handler = (zzz,qqqq) => {
    this.setState(   { property : [
      {name:zzz,age:'12'},
      {name:'singh',age:'23'},
      {name:'ideapad',age:qqqq}
    ]});
  }

  changeHandler = (event,id) => {
    const indx = this.state.property.findIndex(p => 
      {return p.id == id});
      const person = {...this.state.property[indx]};
      person.name = event.target.value;
      const persons = [...this.state.property];
      persons[indx] = person;

    this.setState({property:persons});
  }

  toggle = ()=>{
    this.setState({show:!this.state.show});
  }

  deleteHandler = (indx) => {
    // const property = this.state.property; //bad practice to modify originam=l state directly
    // const property = this.state.property.slice(); //good practice to create copy of object
    const property = [...this.state.property]; // new es6 practice best practice


    property.splice(indx,1);
    this.setState({property:property});
  }
  render() {
    const styl = {
      backgroundColor:'red',
      border:'1px solid #aaa',
      boxShadow:'0 0 5px #aaa',
      ':hover' : {
        backgroundColor:'blue',
        boxShadow:'0 0 20px #aaa',
      }
    }
    const classes = [];
    if(this.state.property.length <=2) classes.push('red');
    if(this.state.property.length <=1) classes.push('bold');

    let persons = null;
    if(this.state.show){
      persons = (          <div>
        {
          this.state.property.map((property,index)=>{
            return(
              
        <Persons change={(event) => this.changeHandler(event,property.id)}  click={this.deleteHandler.bind(this,index)} name={this.state.property[index].name} age ={this.state.property[index].age} key={property.id}/>
        
          )})
        }
      </div>
      );
    styl.backgroundColor = 'green';
    styl[':hover'] = {
      backgroundColor:'yellow',
      boxShadow:'0 0 20px #f00',
    };
    }
    return (
      <StyleRoot>
      <div>
        <p  className={classes.join(' ')}>This is APP</p>
        <button style={styl} onClick = {this.toggle}>click me!</button>
        {persons}
      </div></StyleRoot>
    );
  }
}

export default Radium(App);
