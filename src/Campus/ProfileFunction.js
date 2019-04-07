import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

function ImageAvatars(props) {
  const { classes } = props;

  return (

    <Grid  justify="center"  alignItems="center">
     <span className='ceter'>  <Avatar alt="Profile" src={props.data.photoURL} className={classes.bigAvatar} /></span>
      <Typography className={classes.title} variant="h6" color="inherit" noWrap>displayName : {props.data.displayName}
     </Typography>
     <Typography className={classes.title} variant="h6" color="inherit" noWrap>Email : {props.data.email}
   </Typography>
          
     </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);