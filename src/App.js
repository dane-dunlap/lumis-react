import './App.css';
import './LumisForm.css';
import LumisForm from './LumisForm';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

function App() {
    return (
        <div className="App">
            <div className="logo">
                ✨ Lumis
            </div>
            <RegistrationForm />
            <LoginForm />
            <LumisForm />
        </div>
    );
}

export default App;
