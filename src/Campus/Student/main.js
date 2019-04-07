import React, { Component } from "react"
import { connect } from 'react-redux';
import { Adminfunction, StudentList,PostedJobShow  } from '../../Store/Actions';
import {CircularProgress} from '@material-ui/core'
import StudentFunction from './StudentFunction'
import StudentListFunction from './StudentList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader : true,
      Type:'',
      true:false,
      complete:true,
    }
    }
    
      componentDidMount=()=>{
setTimeout(() => {
  this.fahad();
  
}, 3000);
      }

  
  
fahad=()=>{
  const fah = this.props.UsertypeExist.Type;
  if(fah !== '' && fah !== undefined && this.state.complete){
const g = this.props.UsertypeExist.status
   
    if(this.props.UsertypeExist.status === "Block"){
      this.props.PostedJobShow(this.props.userDetail.uid) 
      this.props.StudentList()
      this.setState({loader:false,Type:fah,complete:false,true:false})
   
    }
    else{
      this.setState({loader:false,Type:fah,complete:false,true:true})

    }
    // this.props.Adminfunction(this.props.userDetail.uid)
  }   

}

loaderStop=()=>{
  this.setState({loader:!this.state.loader})
}


  render() {
    return (

      <div className='lenght'>
{/* // <div className='Exter'> */}

      {this.state.loader ? <CircularProgress/> :
<div>{this.state.true?
  <div>

{this.state.Type==='Student'?
<StudentFunction loaderStop={this.loaderStop} /> :null
}
{this.state.Type !== 'Student'?
 <StudentListFunction loaderStop={this.loaderStop} /> :null
}
</div>:<h5>You are Block By Admin</h5>}
</div>

        }

      </div>
      // </div>
    )
  }
}
  
function mapStateToProp(state) {
  return ({
    userDetail : state.root.userDetail,
    UsertypeExist:state.root.userData
  })
}



function mapDispatchToProp(dispatch) {
  return ({
    Adminfunction: (Uid) => { dispatch(Adminfunction(Uid)) },
    PostedJobShow: (Uid) => { dispatch(PostedJobShow(Uid)) },
    StudentList: () => { dispatch(StudentList()) },
    
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);