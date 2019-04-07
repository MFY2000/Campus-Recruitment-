import React, { Component } from "react"
import { connect } from 'react-redux';
import {CircularProgress} from '@material-ui/core'
import {DelectJob} from '../../Store/Actions'
// import Button from "../../compent/Button"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader : true,
      PostedJob:[]
        }
  }



    componentDidMount=()=>{
     this.setRequest('PostedJob' , this.props.userData.PostJob)
       this.setState({loader:false})
    }


setRequest=(name,value)=>{
 var save = {list:[],key:[]}
  for(let key in value) {
save.list.push(value[key])
save.key.push(key)
  }

  this.setState({[name]:save})
}

Delected=(data,val)=>{
const uid = this.props.UserDetails.uid
const value = this.state.PostedJob.key[val]
const feilds = data
this.props.DelectJob(uid,value,feilds)
const array = this.state.PostedJob
array.list.splice(val,1)
array.key.splice(val,1)
this.setState({PostedJob:array})
}


  render() {
    return (

<div>
      {this.state.loader? <CircularProgress/> :
<div>
{
  <table>
<tr>
  <th>Feids</th> 
  <th>Salary</th> 
  <th>Job_Detials</th>
  <th>Delecte</th> 
  </tr>


<tbody>
{this.state.PostedJob.list.length !== 0   ? this.state.PostedJob.list.map((index,val)=>{ 

return(
  <tr key={val}>
<td>{index.Feilds}</td>
<td>{index.Salary}</td>
<td>{index.Job_Detials}</td>
<td><button onClick={()=>this.Delected(index.Feilds,val)}>Delected</button></td>

</tr>
)   }

):"No Job Posted"}
</tbody>

  </table>
}
</div>      
      }

</div>
)
  }
}

function mapStateToProp(state) {
  return ({
    PostedJobExist:state.root.PostedJobExist,
    userData:state.root.userData,
    UserDetails:state.root.userDetail,

  })
}



function mapDispatchToProp(dispatch) {
  return ({
   DelectJob: (uid,value,feilds) => { dispatch(DelectJob(uid,value,feilds)) },
})
}

export default connect(mapStateToProp, mapDispatchToProp)(App);