import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import ScrollTop from './components/ScrollTop';

import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
      <Router>
        <ScrollTop>
          <App />
        </ScrollTop>
      </Router>,
  document.getElementById('root')
);