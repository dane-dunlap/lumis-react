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
                setShowToast(true);
                setTimeout(() => {
                    setShowToast(false);
                    setShowMessage(false);
                }, 4000);
    
                const savedAlert = response.data.alert;
                const sendResponse = await axios.post('https://lumis-073b4d2c651d.herokuapp.com/api/send_alert', {
                    alert: savedAlert
                });
    
            } else {
                console.error(response.data.error);
            }
    
        } catch (error) {
            setLoading(false);
            console.error("Error:", error);
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
                {showToast && <div className="toast">Alert created successfully!</div>}
                {showMessage && <div className="success-message">You will receive your first alert to your inbox in a few moments.</div>}

            </div>
        </div>

        
    );
};

export default LumisForm;
