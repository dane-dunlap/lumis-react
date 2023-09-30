import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
                <Routes>
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/dashboard" element={<LumisForm />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
