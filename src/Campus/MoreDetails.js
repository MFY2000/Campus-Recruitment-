import React, { Component } from 'react';
import { connect } from 'react-redux';
 import {RequestToBecome,CheckUserExist} from '../Store/Actions'
import {CircularProgress} from '@material-ui/core'

import DetailsFunction from './DetailsFunction'



  class App extends Component {
   constructor(){
     super()
     this.state={
      value:'Student'
      ,Company_Name:"",
      Office_Addears:"",
      Office_Phone_Number:"",
      loader: !true,
      complete:true,
     }
   }



    componentDidUpdate=()=>{
 this.fahad()
    }
   
    componentWillUpdate=()=>{
 this.fahad()
    }



fahad=()=>{
  setInterval(() => {
  const userExist = this.props.userExist
    if(userExist.Type && this.state.complete){
        this.setState({complete : false})
        this.props.history.replace("/User/Student")
      }
      else{
        this.setState({loader : true})
        
      }
  }, 3000);

}


 componentDidMount=()=>{
 this.fahad()

 }


Loader=()=>{
  this.setState({loader:false,complete:true})
  const user = this.props.RequestShown.UserList
  const details = this.props.UserDetails.uid
  this.props.CheckUserExist(details,user)
  
}

  render() {

  return (
    <div>
      
      <div className='ceter'>
{this.state.loader ? <DetailsFunction Loader={this.Loader} /> :

<div>
 <CircularProgress/>
<p>Please Wait</p>
   
</div>
}   
    </div>    
    </div>    
  );
}
}
function mapStateToProp(state) {
  return ({
      UserDetails:state.root.userDetail,
      userExist:state.root.userData,
      RequestTo_Become:state.root.RequestToBecome,
      PostedJobList:state.root.PostedJobList,
      Admin : state.root.AdminOrNot,
      RequestShown : state.root,
    

  })
}



function mapDispatchToProp(dispatch) {
  return ({
    RequestToBecome : (uid) => { dispatch( RequestToBecome (uid)) },
    CheckUserExist: (details,val) => { dispatch(CheckUserExist(details,val)) },
    
})
}

export default connect(mapStateToProp, mapDispatchToProp)(App);