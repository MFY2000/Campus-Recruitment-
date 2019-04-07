import React, { Component } from 'react';
import { connect } from 'react-redux';
//  import {SumbitUser ,RequestToBecome} from '../Store/Actions'
// import List from '../compent/input'
import Button from '../../compent/Button'
import {CircularProgress} from '@material-ui/core'

import Show from '../ProfileFunction'



  class App extends Component {
   constructor(){
     super()
     this.state={
      Update:false
     }
   }

   componentDidMount=()=>{
 this.setState({loader:!false})
   }

onClick=()=>{
  this.setState({Update:false})

}

  render() {
 const {
  value,
  Skill,
  Addears,
  Feilds,
  Company_Name,
  Office_Addears,
 } = this.props.fah
  return (
    <div>
      
      <div className='ceter'>
{this.state.loader ? 
<div>

 <Show data={this.props.UserDetails} />

<div>
  {value==='Student' ? <div>
  <h6>Type : {value}</h6>
  <h6>Feilds : {Feilds}</h6>
  <h6>Skill : {Skill}</h6>
  <h6>Addears : {Addears}</h6>
  <Button onClick={this.props.SumbitStudent} text='Next' type='secondary' />
  
  </div> : <div>
  <h6>Type : {value}</h6>
  <h6>Company_Name : {Company_Name}</h6>
  <h6>Office_Addears : {Office_Addears}</h6>

  <Button onClick={this.props.sumbitCopmany} text='Next' type='secondary' />

  </div>}
  <Button onClick={this.props.show} text='Update' type='secondary' />

  </div>




</div>
:

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
    //   userExist:state.root.userExist,
    //   RequestTo_Become:state.root.RequestToBecome,

  })
}



function mapDispatchToProp(dispatch) {
  return ({
    // SumbitUser : (uid,more) => { dispatch( SumbitUser (uid,more)) },
    // RequestToBecome : (uid) => { dispatch( RequestToBecome (uid)) },
    
})
}

export default connect(mapStateToProp, mapDispatchToProp)(App);