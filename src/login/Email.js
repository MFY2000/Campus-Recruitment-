//React Basic Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

//Material-UI Components
import {withStyles, Paper , Typography, CircularProgress,} from '@material-ui/core'

//firebase & its components
// import * as firebase from 'firebase';
import '../config';
//Custom Tags
import Button from '@material-ui/core/Button';
import Login from './LoginAdmin';

class SignIn extends Component {
constructor(){
  super()
  this.state={
    value:'Admin'
  }
}

Admin=()=>{
this.setState({value:'user'})

}

user=()=>{
this.setState({value:'Admin'})
}


AdminLogin=()=>{
this.props.history.replace("Admin/Admin")
}
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.motherContainer}>
          <Paper
            className={classes.root}
            elevation={5}>

            {value === "Admin" ?<div>

             <Typography
              align='center'
              color='secondary'
              variant='h4'
              children='Campus Recruitment System'
            />
            <Typography
              align='center'
              color='primary'
              variant='h5'
              gutterBottom={true}
              children={'Sigup/Sigin'}
            />

<StyledFirebaseAuth {...this.props}/>
</div> :             <Login classes={classes} ifTrue={this.AdminLogin} />
 }
<Typography
              align='center' 
              variant='h6'
              gutterBottom={true}
            > 
            Login from  <Button variant="outlined" size="small" color="primary" className={classes.margin}  onClick={value==='Admin'?this.Admin:this.user}>
            {this.state.value}
          </Button>
</Typography>




          </Paper>
        
   </div>
    );
  }
}

const styles = theme => ({
  TextFields: {
    marginBottom: "20px",
    width: "95%"
  },
  motherContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customSpacing: {
    marginTop: theme.spacing.unit * 1.5,
    marginBottom: theme.spacing.unit,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    width: 350,
  },
});

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);