import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dayData, timeSlots } from '../data/scheduleData';
import './appointment.css';

const Appointment = () => {
    const { day, date, time } = useParams();
    const navigate = useNavigate();
    const [selectedTime, setSelectedTime] = useState(time);
    const [showDropdown, setShowDropdown] = useState(false);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const currentDayData = dayData[day]?.availability || {};
    const availableTimes = timeSlots
        .filter(slot => currentDayData[slot.key])
        .map(slot => slot.time);



    const selectTime = (newTime) => {
        setSelectedTime(newTime);
        setShowDropdown(false);
        navigate(`/appointment/${day}/${date}/${newTime}`, { replace: true });
    };

    const back = () => navigate('/');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        

        // Weiterleitung zur Bestätigungsseite mit Daten
        navigate('/confirmation', {
            state: {
                ...formData,
                day,
                date,
                time: selectedTime
            }
        });
    };

    return (
        <div className="appointment-page">
            <div className="appointment-container">
                <button className="back-button" onClick={back}>
                    ← Zurück
                </button>
                
                <div className="appointment-header">
                    <h1>Termin buchen</h1>
                    <div className="appointment-details">
                        <div className="detail-item">
                            <span className="label">Tag:</span>
                            <span className="value">{day}</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Datum:</span>
                            <span className="value">{date}</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Zeit:</span>
                            <div className="time-dropdown">
                                <span className="time-value" onClick={() => setShowDropdown(!showDropdown)}>
                                    {selectedTime} 
                                    <span className={`dropdown-arrow ${showDropdown ? 'open' : ''}`}>▼</span>
                                </span>
                                {showDropdown && (
                                    <div className="dropdown-menu">
                                        {availableTimes.map((timeOption) => (
                                            <div
                                                key={timeOption}
                                                className={`dropdown-item ${selectedTime === timeOption ? 'selected' : ''}`}
                                                onClick={() => selectTime(timeOption)}
                                            >
                                                {timeOption}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="appointment-content">
                    <form onSubmit={handleSubmit}>
                        <h2>Terminbuchung</h2>
                        
                        <div className="form-group">
                            <label>Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>E-Mail *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Telefonnummer</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Nachricht</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="4"
                            />
                        </div>

                        <button type="submit" className="submit-button">
                            Termin bestätigen
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;