import React from 'react';
import './App.css';
import './LumisForm.css';
import AppAlertForm from './AppAlertForm';
import LumisForm from './LumisForm';




function App() {
    return (
        <div className="App">
            <div className="logo">
                ✨ Lumis
            </div>
            <AppAlertForm />
            <LumisForm />
        </div>
    );
}


export default App;


