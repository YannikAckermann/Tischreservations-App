
export const dayData = {
    'Montag': {
        date: '30. September 2025',
        availability: {
            '17-18': false,
            '18-19': false,
            '19-20': true,
            '20-21': false
        }
    },
    'Dienstag': {
        date: '1. Oktober 2025',
        availability: {
            '17-18': false,
            '18-19': true,
            '19-20': true,
            '20-21': true
        }
    },
    'Mittwoch': {
        date: '2. Oktober 2025',
        availability: {
            '17-18': true,
            '18-19': true,
            '19-20': false,
            '20-21': true
        }
    }
};

export const timeSlots = [
    { time: '17:00-18:00', key: '17-18' },
    { time: '18:00-19:00', key: '18-19' },
    { time: '19:00-20:00', key: '19-20' },
    { time: '20:00-21:00', key: '20-21' }
];