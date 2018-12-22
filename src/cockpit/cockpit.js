import React,{Component} from 'react';
import Aux from '../hoc/aux';
import withClass from '../hoc/withClass2';
const styl = {
    borderLeft:'2px dashed #090',
    backgroundColor:'#daffda',
    display:'inline-block',
    padding:'10px 120px 10px 10px',
    margin:'10px'
}
class cockpit extends Component{
    constructor(props){
        super();
        console.log("[cockpit.js]>constructor()",props);
        this.state = {
    
          property: [
            {name:"roshan",age:"12",key:"213123"},
            {name:"singh",age:"23",key:"fsdfa"},
            {name:"ideapad",age:"34",key:"bnmvn"},
          ],
          show:true
        };
      }
      componentWillMount(){
    
        console.log("[cockpit.js]>componentWillMount()");
      }
    componentDidMount(){
    
      console.log("[cockpit.js]>componentDiDMount()");
    }

    componentWillReceiveProps(nextProps){
        console.log('[UPDATE cockpit.js]>componentWillReciveProps',nextProps);
    }
      

    render(){
        console.log("[cockpit.js]>render()");

        return  (
            <Aux>
            
                <h3>INDICATOR</h3>
                <button onClick={this.props.hideHandler} >CLICK</button>
            
            </Aux>
        )
    }
}

export default withClass(cockpit,styl);