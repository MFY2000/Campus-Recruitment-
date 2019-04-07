import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Veiws from '../../compent/Veiws';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function DetailedExpansionPanel(props) {
  const { classes } = props;
 const {Company_Name,Details,Feilds,Office_Addears,Salary,Job_Detials}=props.props
  return (

//      <div className={classes.root}>
//      <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//         <div className={classes.column}>
//             <Typography className={classes.heading}>Company_Name : {Company_Name}</Typography>
//           </div>
//           <div className={classes.column}>
            
//             <Typography className={classes.heading}>Feilds : {Feilds}</Typography>
//           </div>
//           <div className={classes.column}>
//             <Typography className={classes.secondaryHeading}>{props.Type}</Typography>
//           </div>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails className={classes.details}>
//           <div className={classes.column } />
//         </ExpansionPanelDetails>  
//                  <Divider />
//         <ExpansionPanelActions>

//         <div>

// <Button size="small" onClick={()=>{props.cancel(props)}} >Cancel</Button>
// <Button size="small" color="primary" onClick={()=>{
// props.Accpet(props)
// }} >Accpet</Button> 
// </div>
// </ExpansionPanelActions>
// </ExpansionPanel> 

 <tr>
{console.log(props)}
 <td>{Details.displayName} <p><img src={Details.photoURL} className='smail' /></p>
   </td> 
 <td>{Feilds}</td> 
  
 <td>{Salary}</td> 
 <td>{Job_Detials}

 </td> 
 <td>        <div>

 <Button size="small" onClick={()=>{props.cancel(props)}} >Cancel</Button>
 <Button size="small" color="primary" onClick={()=>{
 props.Accpet(props)
 }} >Accpet</Button> 
 </div>
 </td> 


 </tr> 














  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);