import React from 'react';
import PropTypes from 'prop-types';
import { SnackbarProvider, withSnackbar } from 'notistack';

class App extends React.Component {
  handleClickVariant  = ( variant,message) => {
    // variant could be success, error, warning or info
    this.props.enqueueSnackbar( message, { variant });
  const inter = setInterval(() => {
    this.props.messageShow('','')    
  }, 10000);
clearInterval(inter)
};




  componentDidMount=()=>{
    this.handleClickVariant(this.props.MessageType,this.props.message)
  }

  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};

const MyApp = withSnackbar(App);

function IntegrationNotistack(props) {
  return (
 <SnackbarProvider maxSnack={3}>
    <MyApp {...props} />
 </SnackbarProvider>
);
}

export default IntegrationNotistack