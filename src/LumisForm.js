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


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  // Start the loading animation
    
        try {
            const response = await axios.post('https://lumis-073b4d2c651d.herokuapp.com/api/create_alert', {
                company: company,
                cadence: cadence,
                email: email
            });
            setTimeout(() => {
                setLoading(false);  // Stop the loading animation
    
                if (response.data.message === "Success") {
                    setShowToast(true); // Show the toast
                    setTimeout(() => {
                        setShowToast(false); // Hide the toast after 2 seconds
                    }, 2000);
                } else {
                    console.error(response.data.error);
                }
            }, 1000);  // <--- This is the missing duration parameter for the outer setTimeout. Adjust the 1000 (1 second) to your desired duration.
    
        } catch (error) {
            setLoading(false);  // Stop the loading animation immediately in case of an error
            console.error("Error:", error);
        }
    };
    
    
    return (
        <div className="container">
            <h1>Updates on your favorite companies, directly to your inbox</h1>
            <p className="description">Enter the list of companies you would like updates on below. Then enter your email and select how often you want Lumis to send you summaries.</p>

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
            </div>
        </div>

        
    );
};

export default LumisForm;
