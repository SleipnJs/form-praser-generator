import './App.css';
import FormBuilder from "./components/FormClient/FormBuilder";
import FormGenerator from "./components/FormGenerator";
import {Router, Switch, Route} from "react-router-dom";
import {history} from "./helpers/history";

function App() {


    return (
        <Router history={history}>
            <div className="App">
                <div>
                    <Switch>
                        <Route exact path="/createForm" component={FormGenerator}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
