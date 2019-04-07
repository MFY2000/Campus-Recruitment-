import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Block from '../Campus/Admin/Block/Block'
import UnBlock from '../Campus/Admin/Block/unblock'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    alignItems: "center"

  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
    // borderBottomRadius: "50%" ,

  },
  tabsIndicator: {
    backgroundColor: 'secondary',
  },
  tabRoot: {
    textTransform: 'initial',
    // minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      transition: "all 0.7s ease-in-out",
/* line-height: 3%; */
transform: "scale(1.5,1)",

      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: 'primary',
    },
  },
  tabSelected: {},
  typography: {
    // padding: theme.spacing.unit,
  },
});

class CustomizedTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="BLOCK"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="UNBLOCK"
          />
        </Tabs>
        {this.state.value === 0 ? <Block list={this.props.Block} Reload={this.props.Reload} />: <UnBlock list={this.props.UnBlock} Reload={this.props.Reload} />}
      </div>
    );
  }
}
CustomizedTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTabs);
