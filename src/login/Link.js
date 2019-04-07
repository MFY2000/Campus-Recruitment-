import React, { Component } from 'react';
import { connect } from 'react-redux';
import {messageShow} from '../Store/Actions'
import Button from '@material-ui/core/Button';


  class App extends Component {
 
    LinkGO=(val)=>{
        this.props.history.replace(val)
    }
    render() {

  return (
    <div>
    <span>
    {this.props.userData.Type ==="Company"?
<span>
    
<Button color="inherit" onClick={ ()=>{this.LinkGO("/User/Student")} } >Student List</Button>  <Button color="inherit" onClick={()=>{this.LinkGO("/User/"+this.props.data.uid+"/Company")}} >Post Job</Button>
</span>:null}
{this.props.userData.Type === ""?'':null}
{this.props.userDetail.uid === "ljnT9KzosfaudRYPAtXo9NURuTf1" ? 

<span>
<Button color="inherit" onClick={()=>{this.LinkGO("/Admin/Admin")}}>BLock/Unblock</Button>  <Button color="inherit" onClick={()=>{this.LinkGO("/Admin/Request's")}}>Request's</Button>
</span>
: null} 

    </span>
 
    </div>
  );
}
}
function mapStateToProp(state) {
  return ({
    userDetail:state.root.userDetail,
    userData:state.root.userData
  })
}



function mapDispatchToProp(dispatch) {
  return ({
    messageShow : (uid,more) => { dispatch( messageShow (uid,more)) },
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);