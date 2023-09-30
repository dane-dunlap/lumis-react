import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './LumisForm.css';
import LumisForm from './LumisForm';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="logo">
                    ✨ Lumis
                </div>
                <Switch>
                    <Route path="/register">
                        <RegistrationForm />
                    </Route>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/">
                        <LumisForm />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
