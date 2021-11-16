import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import SurveyForm from './pages/SurveyForm/SurveyForm';
import Results from './pages/Results/Results';


const App = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path="/survey" component={SurveyForm} />
                    <Route path="/results" component={Results} />
                </Switch>
            </Router>
        </div>  
    );
}

export default App;
