import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './LumisForm.css';
import AppAlertForm from './AppAlertForm';
import LumisForm from './LumisForm';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="logo">
                    ✨ Lumis
                </div>
                <nav className="nav">
                    <Link to="/" className="nav-button">LumisForm</Link>
                    <Link to="/app-alert" className="nav-button">App Alert Form</Link>
                </nav>
                <Routes>
                    <Route index element={<LumisForm />} />
                    <Route path="app-alert" element={<AppAlertForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
