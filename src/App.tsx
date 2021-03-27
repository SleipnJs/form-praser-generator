import './App.scss';
import FormBuilder from "./components/FormClient/FormBuilder";
import FormGenerator from "./components/FormGenerator";
import {Router, Switch, Route} from "react-router-dom";
import {history} from "./helpers/history";
import MainPage from './pages/MainPage/MainPage';
import Survey from './pages/Survey/Survey';

function App() {


    return (
        <Router history={history}>
            <div className="App">
                <div>
                    <Switch>
                        <Route exact path="/createForm" component={FormGenerator}/>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/survey/:id" component={Survey} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
