import React from 'react';
import './App.css';
import './LumisForm.css';
import LumisForm from './LumisForm';
import RegistrationForm from './RegistrationForm';
import AppAlertForm from './AppAlertForm';




function App() {
    return (
        <div className="App">
            <div className="logo">
                ✨ Lumis
            </div>
            <AppAlertForm />
        </div>
    );
}


export default App;


