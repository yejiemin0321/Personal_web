import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Profile from './App/Profile';
import Navigator from './App/Navigator';
import Contact from './App/Contact';
import Experience from './App/Experience';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Redirect from="/" to="/profile" />
      <div className='main'>

        <Route path='/profile' exact component={Profile}></Route>
        <Route path='/contact' exact component={Contact}></Route>
        <Route path='/experience' exact component={Experience}></Route>

      </div>
      <div className='link-top'></div>
      <div className='navigator'>
        <Navigator />
      </div>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


