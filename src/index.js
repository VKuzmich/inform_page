import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from '../src/node_modules/routes';
import TopBar from '../src/node_modules/components/topBar'


const App = () => {
    return(
      <div>
          <Router>
            <TopBar/>
            <Routes/>
          </Router>

      </div>
    )

}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
