import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllBookings, deleteBooking } from '../services/bookingService';
import './my-bookings.css';

const MyBookings = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = () => {
        const allBookings = getAllBookings();
        // Sortiere nach Datum (neueste zuerst)
        const sortedBookings = allBookings.sort((a, b) => 
            new Date(b.bookingDate) - new Date(a.bookingDate)
        );
        setBookings(sortedBookings);
    };

    const handleCancelClick = (booking) => {
        setSelectedBooking(booking);
        setShowCancelModal(true);
    };

    const confirmCancel = () => {
        if (selectedBooking) {
            const success = deleteBooking(selectedBooking.id);
            if (success) {
                loadBookings(); // Aktualisiere die Liste
                setShowCancelModal(false);
                setSelectedBooking(null);
                
                // Trigger Event für andere Komponenten
                window.dispatchEvent(new Event('bookingsUpdated'));
            }
        }
    };

    const cancelModal = () => {
        setShowCancelModal(false);
        setSelectedBooking(null);
    };

    const goBack = () => {
        navigate('/');
    };

    return (
        <div className="my-bookings-page">
            <div className="my-bookings-container">
                <button className="back-button" onClick={goBack}>
                    ← Zurück zur Übersicht
                </button>

                <h1>Meine Buchungen</h1>

                {bookings.length === 0 ? (
                    <div className="no-bookings">
                        <p>Sie haben noch keine Termine gebucht.</p>
                    </div>
                ) : (
                    <div className="bookings-list">
                        {bookings.map((booking) => (
                            <div key={booking.id} className="booking-card">
                                <div className="booking-header">
                                    <h3>{booking.day}</h3>
                                    <span className="booking-time">{booking.time}</span>
                                </div>
                                
                                <div className="booking-details">
                                    <div className="detail-row">
                                        <span className="label">Datum:</span>
                                        <span className="value">{booking.date}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="label">Name:</span>
                                        <span className="value">{booking.name}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="label">E-Mail:</span>
                                        <span className="value">{booking.email}</span>
                                    </div>
                                    {booking.phone && (
                                        <div className="detail-row">
                                            <span className="label">Telefon:</span>
                                            <span className="value">{booking.phone}</span>
                                        </div>
                                    )}
                                    {booking.message && (
                                        <div className="detail-row">
                                            <span className="label">Nachricht:</span>
                                            <span className="value">{booking.message}</span>
                                        </div>
                                    )}
                                    <div className="detail-row">
                                        <span className="label">Gebucht am:</span>
                                        <span className="value">
                                            {new Date(booking.bookingDate).toLocaleString('de-DE')}
                                        </span>
                                    </div>
                                </div>

                                <button 
                                    className="cancel-button"
                                    onClick={() => handleCancelClick(booking)}
                                >
                                    Termin absagen
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Stornierungsbestätigungs-Modal */}
            {showCancelModal && selectedBooking && (
                <div className="modal-overlay" onClick={cancelModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Termin absagen?</h2>
                        <p>Möchten Sie diesen Termin wirklich absagen?</p>
                        
                        <div className="modal-booking-info">
                            <p><strong>{selectedBooking.day}</strong></p>
                            <p>{selectedBooking.date} um {selectedBooking.time}</p>
                            <p>Name: {selectedBooking.name}</p>
                        </div>

                        <div className="modal-actions">
                            <button className="btn-confirm" onClick={confirmCancel}>
                                Ja, absagen
                            </button>
                            <button className="btn-cancel" onClick={cancelModal}>
                                Abbrechen
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyBookings;
