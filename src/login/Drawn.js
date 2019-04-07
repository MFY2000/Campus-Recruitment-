import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  constructor(props){
  super(props)
    this.state = {
    left: this.props.value,
  };
}

  BUTTON=(key)=>{
    if(key==='Company'){

      this.props.history.replace("/User/"+this.props.data.uid + "/"+key)

    }
    else{
this.props.history.replace("/User/"+key)
}

  }



componentWillReceiveProps=()=>{
  this.setState({left:this.props.value})

}
  render() {
    const { classes } = this.props;
    const Check = this.props.array && this.props.UsertypeExist === "Student"   ? true : false ;    
    
    const array = Check ?  ['Student', 'Admin'] : ['Student', 'Company', 'Admin']
    const sideList = (
      <div className={classes.list}>
        <List>
          {array.map((text) => (
            <ListItem button key={text}>
            <Button onClick={()=>this.BUTTON(text)} >
              <ListItemText primary={text} />
            </Button>
            
            </ListItem>
          ))}
        </List>
       </div>
    );

    return (
      <div>
        <Drawer open={this.state.left} onClose={this.props.toggleDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.toggleDrawer()}
            onKeyDown={this.props.toggleDrawer()}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);