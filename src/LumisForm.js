import React, { useState } from 'react';
import axios from 'axios';
import './LumisForm.css'; 

function LumisForm() {
    const [company, setCompany] = useState('');
    const [cadence, setCadence] = useState('Daily');
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
    
        try {
            const response = await axios.post('https://lumis-073b4d2c651d.herokuapp.com/api/create_alert', {
                company: company,
                cadence: cadence,
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
                try {
                    const sendResponse = await axios.post('https://lumis-073b4d2c651d.herokuapp.com/api/send_alert', {
                        alert: savedAlert
                    });
                    console.log('Alert sent successfully:', sendResponse.data);
                } catch (sendError) {
                    console.error("Error sending alert:", sendError);
                    setErrorMessage('There was an error sending the alert.');
                    setShowError(true);
                }
    
            } else {
                console.error("Error during alert creation:", response.data.message);
                setErrorMessage('There was an error creating the alert.');
                setShowError(true);
            }
    
        } catch (createError) {
            setLoading(false);
            console.error("Error during alert creation:", createError);
            setErrorMessage('There was an error creating the alert.');
            setShowError(true);
        }
    };
    
    
    
    
    return (
        <div className="container">
            <h1>Get updates on your favorite companies, directly to your inbox</h1>
            <p className="description">Enter the company or key word you want updates on below. Set how often you want to receive alerts and Lumis will summarize the top news about that keyword directly to your inbox!</p>
            {successMessage && <div className="success-message">{successMessage}</div>}

            <form onSubmit={handleSubmit}>
                <div className="label">Company</div>
                <input type="text" value={company} onChange={e => setCompany(e.target.value)} required />
                <div className="label">Update Frequency</div>
                <select value={cadence} onChange={e => setCadence(e.target.value)} required>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                </select>
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

export default LumisForm;
