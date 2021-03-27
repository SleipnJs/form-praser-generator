import FormBuilder from './components/FormClient/FormBuilder';
import FormGenerator from './components/FormGenerator';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './helpers/history';
import MainPage from './pages/MainPage/MainPage';
import Survey from './pages/Survey/Survey';
import { Fragment } from 'react';

function App() {
  return (
    <Router history={history}>
      <Fragment>
        <Switch>
          <Route exact path="/createForm" component={FormGenerator} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/survey/:id" component={Survey} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
