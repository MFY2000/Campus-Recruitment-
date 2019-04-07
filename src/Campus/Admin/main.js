import React, { Component } from "react"
import { connect } from 'react-redux';
import {blockList} from '../../Store/Actions'
import {CircularProgress} from '@material-ui/core'
import Passer from '../../login/Tab'
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader : true,
      Admin:true,
      complete:true,
      Block:'',UnBlock:''
    }
  }

  
  componentDidMount=()=>{
    this.props.blockList(this.props.UserList)
    this.setState({loader:false})

    
  }

  Reloader=()=>{
    this.setState({loader:true})
    this.props.blockList(this.props.UserList);
    setTimeout(() => {
    this.setState({loader:false})
      
    }, 3000);
  }

  
  render() {
    return (

<div className='ceter'>
      {this.state.loader? <CircularProgress/> :
(
this.state.Admin ?
<div className= 'little'>
<Button
color="primary"
variant="contained"
type="Reload"
onClick={this.Reloader}>
  Reload 
   
 </Button>


<Passer Reload={this.Reload} /> 

</div>:<div>
<h4>You are not a admin</h4>
</div>
)}
      </div>
    )
  }
}
  
function mapStateToProp(state) {
  return ({
    userDetail : state.root.userDetail,
    UserList : state.root.UserList,

  })
}



function mapDispatchToProp(dispatch) {
  return ({   
    blockList: (Uid) => { dispatch(blockList(Uid)) },
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);