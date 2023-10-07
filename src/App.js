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
                <nav>
                    <ul>
                        <li><Link to="/">LumisForm</Link></li>
                        <li><Link to="/app-alert">App Alert Form</Link></li>
                    </ul>
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
