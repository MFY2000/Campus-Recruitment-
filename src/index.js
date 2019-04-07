import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './Store/index';
import Router from "./router";
import './App.css'

ReactDOM.render(

 <Provider store={store}> 
<Router />
 </Provider>


, document.getElementById('root'));
