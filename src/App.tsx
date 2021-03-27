import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import Survey from './pages/Survey/Survey';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/survey/:id" component={Survey} />
      </div>
    </Router>
  );
}

export default App;
