import FormBuilder from './components/FormClient/FormBuilder';
import FormGenerator from './components/FormGenerator';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './helpers/history';
import MainPage from './pages/MainPage/MainPage';
import Survey from './pages/Survey/Survey';
import React, {Fragment} from 'react';
import SurveyDetails from "./pages/SurveyDetails/SurveyDetails";

function App() {
  return (
    <Router history={history}>
      <Fragment>
        <Switch>
          <Route exact path="/createForm" component={FormGenerator} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/survey/:id" component={Survey} />
          <Route exact path="/surveyDetails/:id" component={SurveyDetails} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
