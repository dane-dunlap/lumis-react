
import './App.css';
import './LumisForm.css';
import LumisForm from './LumisForm';
import RegistrationForm from './RegistrationForm';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  


function App() {
    return (
        <div className="App">
            <div className="logo">
                ✨ Lumis
            </div>
            <LumisForm />
        </div>
    );
    }
  
  export default App;