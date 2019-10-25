import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Logindetails from './Logindetails';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Logindetails />, document.getElementById('logindetails'));
// ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
