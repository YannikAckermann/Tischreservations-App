import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { timeSlots } from '../data/scheduleData';
import { isSlotBooked } from '../services/bookingService';
import './day-overview.css';

const DayOverview = ({ day, date, availability }) => {
    const navigate = useNavigate();
    const [bookedSlots, setBookedSlots] = useState({});

    useEffect(() => {
        // Prüfe für jeden Zeitslot ob er gebucht ist
        const checkBookings = () => {
            const booked = {};
            timeSlots.forEach(slot => {
                booked[slot.key] = isSlotBooked(day, date, slot.time);
            });
            setBookedSlots(booked);
        };

        checkBookings();
        
        // Event Listener für Storage-Änderungen (wenn in anderem Tab gebucht wird)
        window.addEventListener('storage', checkBookings);
        
        // Custom Event für lokale Änderungen
        window.addEventListener('bookingsUpdated', checkBookings);

        return () => {
            window.removeEventListener('storage', checkBookings);
            window.removeEventListener('bookingsUpdated', checkBookings);
        };
    }, [day, date]);

    const goToAppointment = (slot) => {
        // Erlaube Navigation auch wenn slot gebucht ist (für potentielle Warteliste)
        // Aber nur wenn ursprünglich verfügbar
        if (availability[slot.key]) {
            navigate(`/appointment/${day}/${date}/${slot.time}`);
        }
    };

    const getSlotClass = (slot) => {
        if (bookedSlots[slot.key]) {
            return 'booked'; // Rot für gebuchte Slots
        }
        return availability[slot.key] ? 'available' : 'unavailable';
    };

    return (
        <div className="day-overview">
            <h2 className="day-title">{day}</h2>
            <p className="date">{date}</p>
            <div className="time-slots">
                {timeSlots.map((slot) => (
                    <div
                        key={slot.key}
                        className={`time-slot ${getSlotClass(slot)}`}
                        onClick={() => goToAppointment(slot)}
                    >
                        {slot.time}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DayOverview;