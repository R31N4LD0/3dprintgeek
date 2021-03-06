import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
import List from './List';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/list" component={List} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
  