import React from 'react'
import { connect } from 'react-redux';
import { ToBecomeAdmin,DelecteAccount,Studentfunction,CheckUserExist } from '../Store/Actions';
import Appbar from './AppBar'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      value:true,
      lenght:0,
      complete:true,
      check:false
    }


  }


componentWillUpdate=()=>{
  this.AdminOrNot();
}

componentWillReceiveProps=()=>{
  if(!this.state.check&&this.props.Lenght){
   this.setState({check:true,lenght:this.props.Lenght,value:false})
  }
}


componentDidMount=()=>{
const user = this.props.RequestShown.UserList
const details = this.props.UseDeatils.uid
this.props.CheckUserExist(details,user)

}


    AdminOrNot=()=>{
      const details = this.props.UseDeatils.uid
 if(details!==null && details !== undefined && this.state.complete){
   this.setState({complete:false})

   this.props.Studentfunction(details)
}
    }

  render() {
    return (
      <div className="rightSide">
      <Appbar {...this.props} signOut={this.props.signOut} />
      </div>
    );
  }

}


function mapStateToProp(state) {
  return ({
    UseDeatils:state.root.userDetail,
    PostedJobList:state.root.PostedJobList,
    Admin : state.root.AdminOrNot,
    RequestShown : state.root,
    userData : state.root.userData,
  })
}



function mapDispatchToProp(dispatch) {
  return ({

// campus
    CheckUserExist: (details,val) => { dispatch(CheckUserExist(details,val)) },
    Studentfunction: (details) => { dispatch(Studentfunction(details)) },
    DelecteAccount: (details) => { dispatch(DelecteAccount(details)) },
    
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(Header)