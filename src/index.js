import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Error404 from './Error';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />

        <Route exact path='*' component={Error404} />
      </div>
  </Router>,
  document.getElementById('root')
);



registerServiceWorker();
