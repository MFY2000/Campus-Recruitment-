import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CompanyLinK from './Link';


const styles = theme => ({
  root: {
    width: '100%',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
 constructor(){
   super()
  this.state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    left:false
  };

 }
 



  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };



  toggleDrawer = () => () => {
    this.setState({
      left: !this.state.left,
    });
  };


  render() {
    const { anchorEl, mobileMoreAnchorEl,left } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const array = this.props.UsertypeExist !== '' && this.props.UsertypeExist !== undefined &&  this.props.UsertypeExist !== null ? true : false
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >  
        <MenuItem onClick={this.props.signOut}>Sign Out</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <Avatar alt="Remy Sharp" src={this.props.data.photoURL}  className={classes.avatar} />        
          </IconButton>

        </MenuItem>
      </Menu>
    );
    const Company = this.props.userData
    // const AdminLinK = (<span>
    //   <Button color="inherit">Block/Unblock</Button><Button color="inherit">Request's</Button>
    // </span>)

    return (
      <div className={classes.root}>
         <AppBar position="static">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} onClick={this.toggleDrawer()}  color="inherit" aria-label="Open drawer">
              <MenuIcon />
          <Drawn {...this.props} toggleDrawer={this.toggleDrawer} value={left} array={array} /> 
            </IconButton> */}
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Campus Recruitment({this.props.data.displayName !== null ? this.props.data.displayName : "Admin"})
            </Typography>
            
            <CompanyLinK {...this.props} />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
               <IconButton
                 aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                 aria-haspopup="true"
                 onClick={this.handleProfileMenuOpen}
                 color="inherit"
               >
             <Avatar alt="Remy Sharp" src={this.props.data.photoURL}  className={classes.bigAvatar}/>        
               </IconButton>
          
            </div>

            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit" >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);