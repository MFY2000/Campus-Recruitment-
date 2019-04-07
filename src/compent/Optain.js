import React from 'react';
import PropTypes from 'prop-types';
import { withStyles ,createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import green from '@material-ui/core/colors/red';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});

class NativeSelects extends React.Component {
  constructor(props){
  super(props)
    this.state = {
    Feilds: this.props.value,
  };}

  componentDidMount=()=>{
    if(this.props.value!==undefined&&this.props.value!==null&&this.props.value!==''){
      this.setState({Feilds:this.props.value})
    }
  }
  

  handleChange = name => event => {
    this.setState({ [name] : event.target.value });
    this.props.onChange(event.target.value,name)
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme} >
      <div className={this.props.className}>
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="Group-native-simple">Your Feilds</InputLabel>
          <Select
            native
            value={this.props.value}
            onChange={this.handleChange('Feilds')}
            inputProps={{
              name: 'Feilds',
              id: 'Group-native-simple',
            }}
          >
            <option value="" />
            <option value="IT">IT</option>
            <option value="Acc">Acc</option>
            <option value="Other">Other</option>
      </Select>
        </FormControl>
        
      </div>
      </div>


      </MuiThemeProvider>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NativeSelects);
  