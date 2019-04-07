import React, { Component } from "react"
import firebase from "firebase"
import { connect } from 'react-redux';
import { Login , isSignfalse,isSignture,important } from '../Store/Actions';
import "../config";
import "../App.css";
import fah from '../image/download.jpg'
import Header from "./Header"
import Email from "./Email";
// import { CircularProgress } from "material-ui";
import { CircularProgress } from '@material-ui/core'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      IsSignIn : this.props.IsSignIn,
      displayName : this.props.userDetail.displayName,
      uid : this.props.userDetail.uid,
      photoURL : this.props.userDetail.photoURL,
      loader: true
    }

  }



  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    
    }
  }

tg=()=>{
this.props.important()
  setTimeout(() => {
    this.setState({loader: false})
  }, 4000);
}

  componentDidMount = () => {
    this.tg()
    firebase.auth().onAuthStateChanged(user => {
    if (user !== null) {this.Data(user)
          }})
      this.fahad()
    }


  Data=(user)=>{
    this.props.isSignture()
    this.props.login(user)
    this.setState({    
      IsSignIn : this.props.IsSignIn,
      displayName : user.displayName,
      uid : user.uid,
      photoURL : (user.photoURL!==null ? user.photoURL : fah ),
      email : user.email,
      phoneNumber : user.phoneNumber,
})
    const path = user.uid !== "ljnT9KzosfaudRYPAtXo9NURuTf1" ? `/User/` : "/Admin/Admin"
     this.props.history.replace(path)

  }


  sigout = () => {
    this.props.isSignfalse()
    firebase.auth().signOut()
    this.props.history.replace('/')
    }

fahad=()=>{
  this.props.login(this.state)

}

  render() {
    return (
      <div>{this.state.loader?<CircularProgress />: <div>

        {this.props.IsSignIn ? (
        <div>
          {/* {this.fahad()} */}
        <Header data={this.state} signOut={this.sigout} {...this.props}  /> 
       
       </div> 
       
        ) : (
          <div>
          
            <Email uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} {...this.props} />
          
          </div>
        
       
       )}
          </div>   
           }</div>
     )
  }
}
  
function mapStateToProp(state) {
  return ({
    LoginSuccessFull : state.root.LoginSuccessFull,
    IsSignIn : state.root.isSignedIn,
    userDetail : state.root.userDetail,
    UsertypeExist : state.root.UsertypeExist,
  })
}



function mapDispatchToProp(dispatch) {
  return ({
   login: (Uid) => { dispatch(Login(Uid)) },
   isSignfalse: () => { dispatch(isSignfalse()) },
   isSignture: () => { dispatch(isSignture()) },
   important: () => { dispatch(important()) },
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);