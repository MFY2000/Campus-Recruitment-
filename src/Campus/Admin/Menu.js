import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    CircularProgress, Button,
    AppBar, Typography,
    Tabs, Tab
} from '@material-ui/core';
import { auth, database } from 'firebase';
import UpdateFunction from './TabMore'
import JobFunction from './passer'
  class App extends Component {
   constructor(){
     super()
     this.state={
       Message:'',
       profiles:[],
       val:0,
       loader:false

     }
   }

   selectTab=(val)=>{
    this.setState({val})
}



   
    
    render() {
const profiles = this.state.val
  return (
    <div>

    <div className='tab-styling'>
    <div>
        <AppBar position='relative'>
            <Tabs
                value={profiles}
                variant='fullWidth'
                centered
            >
                <Tab
                    label='Update'
                    onClick={() => this.selectTab(0)}
            ></Tab>
             <Tab
                    label='Posted Job'
                    onClick={() => this.selectTab(1)}
            ></Tab>
            </Tabs>
        </AppBar>
    </div>

    </div>
    <br />
    <br />
<span>
    {profiles === 0 ? <JobFunction />: <UpdateFunction />}
</span>
    
    
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
   
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
