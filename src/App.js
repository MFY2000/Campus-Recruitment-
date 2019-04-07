import React, { Component } from 'react';
import { connect } from 'react-redux';
import {messageShow} from './Store/Actions'
import Snackbar from './Snackbar';
// import App from ''


  class App extends Component {
   constructor(){
     super()
     this.state={
       Message:''
     }
   }
   
   
   
    componentDidUpdate=()=>{
    if(this.props.message !== this.state.Message){this.setState({Message:this.props.message})
    }}
    
    
    render() {

  return (
    <div>
      <div>
      {this.state.Message !== '' ? <Snackbar {...this.props} /> : null}
      </div>
    </div>
  );
}
}
function mapStateToProp(state) {
  return ({
    MessageType:state.root.MessageType,
    message:state.root.Message
  })
}



function mapDispatchToProp(dispatch) {
  return ({
    messageShow : (uid,more) => { dispatch( messageShow (uid,more)) },
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);