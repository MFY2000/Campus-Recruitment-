import React, { Component } from "react"
import { connect } from 'react-redux';
import {CircularProgress} from '@material-ui/core'
import AdminFunction from './AdminFunction'
// import Veiws from './Modal'
import {cancel ,AccpetJob , AdminAccpet,AccpetBoth,cancelBoth} from '../../Store/Actions'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader : false,
      Admin:'',
      complete:true,
      Open:false,
      AdminAccpetJob:[],
      openData:[],
      AccpetUser:[],
      UpdateFollowing:[],
    }
  }


    
    componentDidMount=()=>{
      this.setRequest( 'AdminAccpetJob' , this.props.AdminAccpetJob)
      
      this.setState({loader:true})
    }


setRequest=(name,value)=>{
 var save = []
  for(let key in value) {
save.push(value[key])
  }

  this.setState({[name]:save})
}

open=(pr)=>{
this.setState({Open:true,openData:pr})
}




onAccpet=(r)=>{
   this.props.AccpetJob(r.props,r.props.Feilds)
   const array = this.state.AdminAccpetJob
   array.splice(r.value,1)
   this.setState({AdminAccpetJob : array , complete : !this.state.complete})
}

onCancel=(r)=>{
  this.props.cancel(r)
    const array = this.state.AdminAccpetJob
  array.splice(r.value,1)
  this.setState({AdminAccpetJob : array , complete : !this.state.complete})}






AccpetBoth=(props)=>{
const {More,Type} = props.props
const details = props.props
//props.props,details)
  const OldUrl = `Admin/ToBecome/${Type}/${More.uid}/`
  const NewUrl = `User/${More.uid}`
  const MoreUrl = ``
  this.props.AccpetBoth(details,OldUrl,NewUrl,MoreUrl)
  const array = this.state.AccpetCompany
  array.splice(props.value,1)
  this.setState({AccpetCompany : array , complete : !this.state.complete})

}


cancelBoth=(Type,value,props)=>{
  if(Type  === 'Student'){
const Url =  `Admin/ToBecome/${Type}/${props}/`
this.props.cancelBoth(Url)
const array = this.state.AccpetUser
array.splice(value,1)
this.setState({AccpetUser : array , complete : !this.state.complete})

  }
  else{
const Url =  `Admin/ToBecome/${Type}/${props}/`
this.props.cancelBoth(Url)
const array = this.state.AccpetCompany
array.splice(value,1)
this.setState({AccpetCompany : array , complete : !this.state.complete})

}
}


render() {
  const profiles = this.state.AdminAccpetJob
    return (
<div className='Extere'>

  <div className='renderTable'>
  <table className="table table-striped">                            <thead className='thead-dark'>
                          <tr>
                                  <th scope='col'>Posted By</th>
                                  <th scope='col'>Job Feilds</th>
                                  <th scope='col'>Salary</th>
                                  <th scope='col'>Job_Detials</th>
                                  <th scope='col'>Accpet/Cancel</th>
</tr>
                      </thead>
                  {this.state.loader ?    
     <tbody>
      {profiles.length !== 0   ? profiles.map((index,val)=>{ 
        
return(
 <AdminFunction props={index}  cancel={this.onCancel} Accpet={this.onAccpet} value={val} open={this.open}  />



)   }

):<h6>No Block List</h6>}
</tbody>
:<CircularProgress />}
   </table>

      </div>

</div>
  );
}
}
  
function mapStateToProp(state) {
  return ({
    userDetail : state.root.userDetail,
    AdminIsUser : state.root.AdminIsUser,
    AdminAccpetAdmin: state.root.AdminAccpetAdmin,
    AdminAccpetJob: state.root.AdminAccpetJob,
    AccpetCompany:state.root.AccpetCompany,
    AccpetUser : state.root.AccpetUser,
    UpdateFollowing : state.root.update,
})
}



function mapDispatchToProp(dispatch) {
  return ({
   cancel: (Uid,uid) => { dispatch(cancel(Uid,uid)) },
   AccpetJob: (Uid,uid) => { dispatch(AccpetJob(Uid,uid)) },
   AdminAccpet: (Uid) => { dispatch(AdminAccpet(Uid)) },
   AccpetBoth: (details,OldUrl,NewUrl,MoreUrl) => { dispatch(AccpetBoth(details,OldUrl,NewUrl,MoreUrl)) },
   cancelBoth: (url) => { dispatch(cancelBoth(url)) },
   
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);