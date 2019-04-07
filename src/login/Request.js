import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = theme => ({
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
});

function CustomizedBadge(props) {
  const { classes } = props;

  return (
<div className='small'>    
    <IconButton aria-label="Cart" onClick={props.Show}>
      <Badge badgeContent={props.lenght} invisible={props.value} color="primary" classes={{ badge: classes.badge }}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
</div>  );
}

CustomizedBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedBadge);