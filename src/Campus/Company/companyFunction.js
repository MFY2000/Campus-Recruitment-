import React, { Component } from "react"
import { connect } from 'react-redux';
import { PostJob,PostedJobShow,UpdateJob,messageShow } from '../../Store/Actions';
import PostedJobs from './PostedJobs'
import Feilds from '../../compent/Optain'
import List from '../../compent/input'
import Button from '../../compent/Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader : true,
      Type:'',
      Not:false,
      Job_Detials:"",
      complete:true,
      Salary:'',Feilds:'',Update:false,Change:{}
    }
  }


//       componentDidMount=()=>{
//     this.fahad()
//   }


// fahad=()=>{
//   const fah = this.props.UsertypeExist;

// //fah)

//   if(fah !== '' && fah !== undefined && this.state.complete){
//     this.setState({Type:fah,complete:false})
//   }
// }


AddJob=()=>{
const {Salary,Feilds,Job_Detials} = this.state

if(Salary&&Feilds&&Job_Detials){

  const data = {Salary,Feilds,Job_Detials}
  data.TypeOf = {type:'Pending',Details:"To Accpet by Admin"}
  data.Details=this.props.userDetail
 this.props.PostJob(this.props.userDetail.uid,data)
this.setState({loader:false})

}

else{this.props.messageShow('error','Plesae Fill')}
}

onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}


Update=(props,v)=>{
  const {Feilds,Salary,Job_Detials} = props
 this.setState({Feilds,Salary,Job_Detials,Update:true, OldProps:props})
}


 UpdateAdd = ()=>{
   const {Feilds,Salary,Job_Detials} = this.state.OldProps
 if(Feilds!==this.state.Feilds||Salary!==this.state.Salary||Job_Detials!==this.state.Job_Detials){
 this.Check("Feilds" , this.state.Feilds)
 this.Check("Salary" , this.state.Salary)
 this.Check("Job_Detials" , this.state.Job_Detials)
 this.props.UpdateJob(this.state.Change,this.state.OldProps.Details)
 this.setState({Feilds:"",Salary:"",Job_Detials:"",Update:false})
 }
 else{this.props.messageShow('error','No Change Found')}


 }

 Check=(props , value)=>{
   const Change = this.state.Change
  Change.Type = 'Change In Jobs'
  Change.id = this.state.Feilds
  
   if(value !== this.state.OldProps[props]){
    Change[props] = value
  }
   this.setState({Change:Change})
 }

  render() {
    return (

<div className='ceter'>
<div>
    <h6>Add a new Job</h6>
{this.state.loader ?    <form action="javascript:void(0)">
<Feilds onChange={(name,vale)=>{this.setState({[vale]:name})}} value={this.state.Feilds} />
<label>Jobs Detials:</label>
  <textarea className="form-control" rows="5" name="Job_Detials" onChange={this.onChange} required value={this.state.Job_Detials} ></textarea>
<List name='Salary' value={this.state.Salary} onChange={this.onChange} type='number' />

<Button onClick={this.state.Update ? this.UpdateAdd : this.AddJob} text={this.state.Update ? "Update" : 'AddJob' } type='primary' />
    </form>
:null}</div>
<br />

 <div> <h6>Posted Jobs</h6>
<PostedJobs onClick={this.Update}  />
 </div>



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
   PostJob : (Uid,data) => { dispatch(PostJob(Uid,data)) },
   PostedJobShow : (Uid) => { dispatch(PostedJobShow(Uid)) },
   messageShow : (uid,more) => { dispatch( messageShow (uid,more)) },
   UpdateJob : (uid,more) => { dispatch( UpdateJob (uid,more)) },

  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);