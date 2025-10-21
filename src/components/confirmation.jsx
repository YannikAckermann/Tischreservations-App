import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { saveBooking } from '../services/bookingService';
import './confirmation.css';

const Confirmation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const bookingData = location.state || {};
    const hasSaved = useRef(false);

    useEffect(() => {
        // Speichere die Buchung nur einmal im LocalStorage
        if (bookingData && bookingData.name && bookingData.day && !hasSaved.current) {
            try {
                saveBooking(bookingData);
                hasSaved.current = true;
                // Trigger Event für andere Komponenten
                window.dispatchEvent(new Event('bookingsUpdated'));
            } catch (error) {
                console.error('Fehler beim Speichern der Buchung:', error);
            }
        }
    }, [bookingData]);

    const backHome = () => navigate('/');

    return (
        <div className="confirmation-page">
            <div className="confirmation-container">
                <div className="success-icon">✓</div>
                <h1>Termin bestätigt!</h1>
                <p>Ihr Termin wurde erfolgreich gebucht.</p>
                
                <div className="booking-summary">
                    <h2>Buchungsdetails</h2>
                    <div className="detail">
                        <span>Name:</span>
                        <span>{bookingData.name}</span>
                    </div>
                    <div className="detail">
                        <span>E-Mail:</span>
                        <span>{bookingData.email}</span>
                    </div>
                    <div className="detail">
                        <span>Telefon:</span>
                        <span>{bookingData.phone}</span>
                    </div>
                    <div className="detail">
                        <span>Tag:</span>
                        <span>{bookingData.day}</span>
                    </div>
                    <div className="detail">
                        <span>Datum:</span>
                        <span>{bookingData.date}</span>
                    </div>
                    <div className="detail">
                        <span>Zeit:</span>
                        <span>{bookingData.time}</span>
                    </div>
                    {bookingData.message && (
                        <div className="detail message">
                            <span>Nachricht:</span>
                            <span>{bookingData.message}</span>
                        </div>
                    )}
                </div>

                <button className="home-button" onClick={backHome}>
                    Zurück zur Übersicht
                </button>
            </div>
        </div>
    );
};

export default Confirmation;