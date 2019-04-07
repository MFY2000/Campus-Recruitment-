import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Body from './Campus/MoreDetails';
import Login from './login/App';
import Message from './App'
import Company from './Campus/Company/main'
import Student from './Campus/Student/main'
import Admin from './Campus/Admin/main'

import Profile from './Campus/Admin/Menu'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div className='displayLine'>
          <Route  path="/" component={Login} />
          <Route  path="/" component={Message} />
          <Route exact path="/User" component={ Body } />
          <Route exact path="/User/:uid/Company" component={ Company } />
          <Route exact path="/Admin/Admin" component={ Admin } />
          <Route exact path="/Admin/Request's" component={ Profile } />
          <Route exact path="/User/Student" component={ Student } />

          
        </div>
      </Router>
    );
  }
}
export default Routes;
