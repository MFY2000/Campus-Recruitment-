import React, { Component } from "react"
import { connect } from 'react-redux';
import {CircularProgress} from '@material-ui/core'
import Company from './companyFunction'
import Button from '../../compent/Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader : true,
      Type:'',
      S:true,
      complete:true,
    }
  }

    
      componentDidMount=()=>{
    this.fahad()
      }
    
  
fahad=()=>{
  const fah = this.props.UsertypeExist.userData.Type;
  if(fah !== '' && fah !== undefined && this.state.complete){
    this.setState({loader:false,Type:fah,complete:false})
  } 
}




  render() {
    return (

<div>

      {this.state.loader? <CircularProgress/> :
(
this.state.Type === 'Student' ? <h6>You are a student not a Company</h6> :
<div>

<Company />

</div>
)}
      </div>
    )
  }
}
  
function mapStateToProp(state) {
  return ({
    userDetail : state.root.userDetail,
    UsertypeExist:state.root
  })
}



function mapDispatchToProp(dispatch) {
  return ({
//    login: (Uid) => { dispatch(Login(Uid)) },
   
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);