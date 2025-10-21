import React from 'react';
import { useNavigate } from 'react-router-dom';
import DayOverview from './day-overview';
import { dayData } from '../data/scheduleData';

const Home = () => {
    const navigate = useNavigate();

    const goToMyBookings = () => {
        navigate('/my-bookings');
    };

    return (
        <div className="app">
            <div className="header-with-button">
                <h1>Terminverfügbarkeit</h1>
                <button className="my-bookings-button" onClick={goToMyBookings}>
                    📅 Meine Buchungen
                </button>
            </div>
            <div className="day-overview-container">
                {Object.entries(dayData).map(([day, data]) => (
                    <DayOverview 
                        key={day}
                        day={day} 
                        date={data.date} 
                        availability={data.availability}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
