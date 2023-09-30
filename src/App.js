import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './LumisForm.css';
import LumisForm from './LumisForm';
import RegistrationForm from './RegistrationForm';




function App() {
    return (
        <div className="App">
            <div className="logo">
                ✨ Lumis
            </div>
            <AppAlertFormn />
        </div>
    );
}


export default App;


