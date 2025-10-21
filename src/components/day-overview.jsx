import React from 'react';
import { useNavigate } from 'react-router-dom';
import { timeSlots } from '../data/scheduleData';
import './day-overview.css';

const DayOverview = ({ day, date, availability }) => {
    const navigate = useNavigate();

    const goToAppointment = (slot) => {
        if (availability[slot.key]) {
            navigate(`/appointment/${day}/${date}/${slot.time}`);
        }
    };

    return (
        <div className="day-overview">
            <h2 className="day-title">{day}</h2>
            <p className="date">{date}</p>
            <div className="time-slots">
                {timeSlots.map((slot) => (
                    <div
                        key={slot.key}
                        className={`time-slot ${availability[slot.key] ? 'available' : 'unavailable'}`}
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