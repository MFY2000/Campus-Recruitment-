import React, { Component } from "react"
import { connect } from 'react-redux';
import {CircularProgress} from '@material-ui/core'
import AdminFunction from './List'
import {cancel ,AccpetJob} from '../../Store/Actions'
import Button from "../../compent/Button"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader : true,
      Admin:'',
      complete:true,
      Not:false,
    }
  }


    
    componentDidMount=()=>{
   this.setRequest('IT' , this.props.IT)
   this.setRequest('Accounts' , this.props.Accounts)
   this.setRequest('Other' , this.props.Other)
      this.setState({loader:false})
    }


setRequest=(name,value)=>{
 var save = []

  for(let key in value) {
save.push(value[key])
  }

  this.setState({[name]:save})
}





  render() {
    return (

<div>

      {this.state.loader? <CircularProgress/> :

<div>
  <div>
  <Button onClick={()=>{this.setState({Not:!this.state.Not})}} type='primary' text='Reload' />

  </div>
<h4>Jobs list</h4>
<h6>IT</h6>
{ this.state.IT.length !== 0   ? this.state.IT.map((index,val)=>{ 
return(

  <div key={val}>
 <AdminFunction props={index}   /> 
 <br /> 
  
  </div>
)   
}

):"No IT Jobs"}

<h6>Accounts</h6>
{ this.state.Accounts.length !== 0   ? this.state.Accounts.map((index,val)=>{ 
return(
  <div key={val}>
 <AdminFunction props={index}   />   
<br />  
  </div>
)   
}

):"No Accounts Jobs"}

<h6>Other</h6>
{ this.state.Other.length !== 0   ? this.state.Other.map((index,val)=>{ 
return(
  <div key={val}>
 <AdminFunction props={index}   /> 
<br />
  
  </div>
)   
}

):"No Other Jobs"}



      </div>

      }
</div>
)
  }
}
  
function mapStateToProp(state) {
  return ({
    userDetail : state.root.userDetail,
    IT: state.root.IT,
    Accounts: state.root.Acc,
    Other: state.root.Other,
  })
}



function mapDispatchToProp(dispatch) {
  return ({
   cancel: (Uid,uid) => { dispatch(cancel(Uid,uid)) },
   AccpetJob: (Uid,uid) => { dispatch(AccpetJob(Uid,uid)) },
   
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);