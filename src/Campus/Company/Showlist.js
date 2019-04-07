import React, { Component } from "react"
import { connect } from 'react-redux';
import { Adminfunction, Studentfunction,PostedJobShow  } from '../../Store/Actions';
import {CircularProgress} from '@material-ui/core'
import StudentFunction from './StudentFunction'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader : true,
      Type:'',
      complete:true,
    }
    }
    
      componentDidMount=()=>{
    this.fahad();
      }

  
  
fahad=()=>{
  const fah = this.props.UsertypeExist.UsertypeExist;
  if(fah !== '' && fah !== undefined && this.state.complete){
    this.props.Adminfunction(this.props.userDetail.uid)
   this.props.PostedJobShow(this.props.userDetail.uid) 

    this.setState({loader:false,Type:fah,complete:false})
  }   

}




  render() {
    return (

<div className='Exter'>

      {this.state.loader? <CircularProgress/> :
null}
<StudentFunction />
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
    Adminfunction: (Uid) => { dispatch(Adminfunction(Uid)) },
    PostedJobShow: (Uid) => { dispatch(PostedJobShow(Uid)) },
   
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);