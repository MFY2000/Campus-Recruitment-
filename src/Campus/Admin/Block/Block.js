import React, { Component } from 'react';
import { connect } from 'react-redux';
import {block,blockList} from '../../../Store/Actions'
import {CircularProgress, Typography, Button} from '@material-ui/core'
  class App extends Component {
   constructor(){
     super()
     this.state={
       Message:'',
       profiles:[],
       val:[],
       loader:false

     }
   }

   onClick=(uid,id)=>{
    const data = this.props.UserList;
  const list = this.state.val
  data[uid].status = "Block"
  list.splice(id,1)
  this.props.block(data,uid)
  this.props.blockList(data)
}


componentWillReceiveProps=()=>{
  if(this.state.val!==this.props.blocklist){
    this.setState({val:this.props.blocklist,loader:true})

  }
}


   componentDidMount=()=>{
    setTimeout(() => {
    
    this.setState({val:this.props.blocklist,loader:true})
    
  }, 2000);  
   
  }
   
    
    render() {
const profiles = this.state.val
  return (
    <div className='renderTable'>
    <table className="table table-striped">                            <thead className='thead-dark'>
                            <tr>
                                    <th scope='col'></th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Type</th>
                                    <th scope='col'>Block</th>
 </tr>
                        </thead>
                    {this.state.loader ?    
       <tbody>
        {profiles.length !== 0   ? profiles.map((index,val)=>{ 

return(
  <tr key={val}>
<td><img src={index.More.photoURL} alt='pic' className='smail' /></td>
<td>{index.More.displayName}</td>
<td>{index.More.email}</td>
<td>{index.Type}</td>
<td><Button onClick={()=>this.onClick(index.More.uid,val)}   color="primary"  variant="contained" >Block</Button></td>
</tr>
)   }

):<h6>No Block List</h6>}
</tbody>
:<CircularProgress />}
   </table>
      </div>
  );
}
}
function mapStateToProp(state) {
  return ({
    blocklist:state.root.block,
    message:state.root.Message,
    UserList : state.root.UserList,

  })
}



function mapDispatchToProp(dispatch) {
  return ({
    block : (uid,more) => { dispatch( block (uid,more)) },
    blockList : (uid,more) => { dispatch( blockList (uid,more)) },
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
