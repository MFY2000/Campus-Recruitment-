import React, { Component } from "react"
import { connect } from 'react-redux';
import { Adminfunction, StudentList,PostedJobShow  } from '../../Store/Actions';
// import {CircularProgress} from '@material-ui/core'
import AdminFunction from './ListStudentShown'
import StudentFunction from './StudentList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loader : true,
      Type:'',
      complete:true,
      StudentListExist:[]

    }

    }
    
    componentDidMount=()=>{
        this.fahad();
          }

          componentDidUpdate=()=>{
            this.fahad();
              }

              componentWillReceiveProps=()=>{
                this.fahad();
                  }
                        
  
  
fahad=()=>{
  const fah = this.props.StudentListExist;
  if(fah !== '' && fah !== undefined && this.state.complete){
   this.setRequest('StudentListExist' , this.props.StudentListExist)
    this.setState({loader:false,Type:fah,complete:false})

}   

}


setRequest=(name,value)=>{
    var save = []
   
     for(let key in value) {
  if(value[key].Type==="Student"){
    save.push(value[key])
  }
     }
   
     this.setState({[name]:save})
   }
   

  render() {
    return (

      <div className='lenght'>
{/* <div className='Exter'> */}
<h4>Student list</h4>
{ this.state.StudentListExist.length !== 0   ? this.state.StudentListExist.map((index,val)=>{ 
return(

  <div key={val} className='width20'>
 <AdminFunction props={index}   /> 
 <br /> 
  
  </div>
)   
}

):"No Student List"}


      </div>
    )
  }
}
  
function mapStateToProp(state) {
  return ({
    userDetail : state.root.userDetail,
    StudentListExist:state.root.UserList
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