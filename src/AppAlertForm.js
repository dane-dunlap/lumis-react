import React, { useState } from 'react';
import axios from 'axios';
import './LumisForm.css'; 

function AppAlertForm() {
    const [app_name, set_app_name] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        
        const response = await axios.post('https://lumis-073b4d2c651d.herokuapp.com/api/create_app_alert', {
            app_name: app_name,
            app_country: country,
            email: email
        });
        console.log('Create Alert Response:', response.data);

        setLoading(false);

        if (response.data.message === "Success") {
            console.log('Success from create_alert.');
            setShowMessage(true);
            console.log('Set message to true.');
            setTimeout(() => {
                setShowMessage(false);
            }, 2000);

            const savedAlert = response.data.alert;

            // Try to send the alert
            const sendResponse = await axios.post('https://lumis-073b4d2c651d.herokuapp.com/api/send_app_alert', {
                alert: savedAlert
            });
            console.log('Alert sent successfully:', sendResponse.data);

        } else {
            console.error("Error during alert creation:", response.data.message);
            setErrorMessage('There was an error creating the alert.');
            setShowError(true);
        }

        
    };
    
    
    
    return (
        <div className="container">
            <h1>Follow any app and get updates when they release new app versions</h1>
            <p className="description">Follow competitor apps and get information about their newest releases to see if they have launched new features 👀</p>
            {successMessage && <div className="success-message">{successMessage}</div>}

            <form onSubmit={handleSubmit}>
                <div className="label">App Name</div>
                <input type="text" value={app_name} placeholder="Enter the app's name" onChange={e => set_app_name(e.target.value)} required />
                <div className="label">2-Letter Country Code</div>
                <input type="text" value={country} placeholder="Enter the two letter country" onChange={e => setCountry(e.target.value)} required />
                <div className="label">Email</div>
                <input type="email" placeholder="Enter your email" required value={email} onChange={e => setEmail(e.target.value)} />

                <input type="submit" value={loading ? 'Creating...' : 'Create Alert'} disabled={loading} />
                {loading && <div className="spinner"></div>}
            </form>
            <div className="container">
                {showMessage && <div className="success-message">Alert created successfully!<br></br>You will receive your first alert to your inbox in a few moments.</div>}
                {showError && <div className="error-message">{errorMessage}</div>}


            </div>
            
        </div>

        
    );
};

export default AppAlertForm;
