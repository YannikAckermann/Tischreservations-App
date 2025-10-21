import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './simple-page.css';
import './contact.css';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <div className="simple-page">
            <div className="simple-page-container contact-page">
                <button className="back-button" onClick={() => navigate('/')}>
                    ← Zurück
                </button>
                
                <div className="contact-header">
                    <h1>Kontaktiere Uns</h1>
                    <p className="contact-subtitle">Wir freuen uns von dir zu hören!</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">📧</div>
                            <h3>Email</h3>
                            <p>support@terminbuchung.ch</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <h3>Telefon</h3>
                            <p>+41 79 123 45 67</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">⏰</div>
                            <h3>Öffnungszeiten</h3>
                            <p>Mo-Fr: 08:00 - 18:00<br />Sa-So: Geschlossen</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <h3>Adresse</h3>
                            <p>Musterstrasse 123<br />8000 Zürich<br />Schweiz</p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <h2>Schreib uns eine Nachricht</h2>
                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <h3>Nachricht erfolgreich gesendet!</h3>
                                <p>Wir werden uns so schnell wie möglich bei dir melden.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Dein Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="deine@email.ch"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Betreff *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Worum geht es?"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Nachricht *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Deine Nachricht..."
                                    />
                                </div>

                                <button type="submit" className="submit-button">
                                    Nachricht senden
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
