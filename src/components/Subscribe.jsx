import React, { useState } from 'react'

export default function Subscribe() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setError('Please enter an email address');
            return;
        }
        //  Fake backend talk, send email to backend
        console.log('Subscribing email:', email);
        setIsSubmitted(true);
        setEmail('');
        setError('');
        setTimeout(() => setIsSubmitted(false), 1000); // Reset after 1 seconds
    };

    return (
        <section id="subscribe">
            <div className="subscribe-box">
                <div className="subscribe-content">
                    <img

                        src="/src/assets/icons/notification.svg"
                        alt="Notification Icon"
                        className="notification-icon"
                    />
                    <div className="text-content">
                        <h4>
                            Subscribe to our newsletter to stay informed about latest
                            updates
                        </h4>
                    </div>
                </div>
                <form className="subscribe-form" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <i className="fas fa-envelope"></i>
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit">Subscribe</button>
                    </div>
                </form>
                {error && <p className="error-message">{error}</p>}
                {isSubmitted && <p className="success-message">Thank you for subscribing!</p>}
            </div>
        </section>
    )
}
