import React, { Component } from 'react';
import { connect } from 'react-redux';
 import {SumbitUser ,messageShow} from '../Store/Actions'
 import Button from '@material-ui/core/Button';
 import Gender from '../compent/Gender'
import Feilds from '../compent/Optain'
import Update from './Update/Updatelogin'
import {CircularProgress} from '@material-ui/core'

  class App extends Component {
   constructor(){
     super()
     this.state={
      value:'Student'
      ,Company_Name:"",
      Office_Addears:"",
      Office_Phone_Number:"",
      loader:true,
      complete:true,
      add:true,
      Update:false
     }
   }


 componentDidMount=()=>{
  this.setState({complete : false,loader:false,add:false})
}



   onChange=(e)=>{
  this.setState({[e.target.name]:e.target.value})
  }
   
  
   
   handleChange = event => {
     
    this.setState({ value: event.target.value });
  };



show=()=>{
  this.setState({add:true})
}


  sumbitCopmany=()=>{
    const {Company_Name,Office_Addears,Office_Phone_Number,value} = this.state
    if(Company_Name!==''&&Office_Addears!==''&&Office_Phone_Number!==''){

    const details = {Company_Name,Office_Addears,Office_Phone_Number}
    details.Type = value;
    details.More = this.props.UserDetails

   this.props.SumbitUser(this.props.UserDetails.uid,details)
   this.props.Loader()
  }
else{this.props.messageShow('error','Please the fill the form')}
    }
    
    
    SumbitStudent=()=>{
      const {Feilds,Skill,Addears,Phone_Number,value} = this.state
      if(Feilds!==''&&Skill!==''&&Addears!==''&&Phone_Number!==undefined&&value){
  
      const details = {Feilds,Skill,Addears,Phone_Number}
      details.Type = value;
      details.More = this.props.UserDetails
  
     this.props.SumbitUser(this.props.UserDetails.uid,details)
     this.props.Loader()
    }
  else{this.props.messageShow('error','Please the fill the form')}
      }
     




  render() {

  return (
        <div className='Exter'>
        <div className='ceter'>
      {this.state.loader? 
     <div>
     <CircularProgress/>
<p>Please Wait</p>
     </div>
       :(

<div>
{this.state.add ? 
    <div><h4>Your Profile</h4>
   <Update loader={this.props.Loader} fah={this.state} /> 
       </div>
    :

<div>
<h4>Welcome {this.props.UserDetails.displayName}</h4>
<h6>Please Fill the Form </h6>
<form action="javascript:void(0)" className='ceter'>
<Gender onChange={this.handleChange} value={this.state.value} />



{this.state.value === 'Student'?(
    
  <div>
<Feilds onChange={(name,vale)=>{this.setState({[vale]:name})}} />





<input placeholder='Skill'name='Skill' value={this.state.Skill} onChange={this.onChange}  type='text' maxlength='10' /><br /><br />
<input placeholder='Addears'name='Addears' value={this.state.Addears}  onChange={this.onChange} type='text' maxlength='15' /><br /><br />
<Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={this.show}
                            >

                 Submit
                 
                </Button>
              

  </div>
):
<div>
<input placeholder='Company_Name'name='Company_Name' value={this.state.Company_Name} onChange={this.onChange} type='text'  maxlength='10' /><br /><br />
<input placeholder='Office_Addears' name='Office_Addears' value={this.state.Office_Addears}  onChange={this.onChange} type='text'  maxlength='15' /><br /><br />
<Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={this.show}        >

                 Submit
                 
                </Button>
              
</div>
}</form>
 </div>    
 }   
</div>)
}
      </div>
      </div>
  );
}
}
function mapStateToProp(state) {
  return ({
      UserDetails:state.root.userDetail,
      userExist:state.root.userExist,
      RequestTo_Become:state.root.RequestToBecome,


  })
}



function mapDispatchToProp(dispatch) {
  return ({
    SumbitUser : (uid,more) => { dispatch( SumbitUser (uid,more)) },
    messageShow : (uid,more) => { dispatch( messageShow (uid,more)) },
    
})
}

      
      
export default connect(mapStateToProp, mapDispatchToProp)(App);