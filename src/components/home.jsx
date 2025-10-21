import React from 'react';
import DayOverview from './day-overview';
import { dayData } from '../data/scheduleData';

const Home = () => {
    return (
        <div className="app">
            <h1>Terminverfügbarkeit</h1>
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
