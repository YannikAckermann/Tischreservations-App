// Service für die Verwaltung von Buchungen im LocalStorage

const BOOKINGS_KEY = 'appointments_bookings';

/**
 * Alle Buchungen aus dem LocalStorage laden
 * @returns {Array} Array von Buchungsobjekten
 */
export const getAllBookings = () => {
  try {
    const bookings = localStorage.getItem(BOOKINGS_KEY);
    return bookings ? JSON.parse(bookings) : [];
  } catch (error) {
    console.error('Fehler beim Laden der Buchungen:', error);
    return [];
  }
};

/**
 * Neue Buchung speichern
 * @param {Object} booking - Buchungsobjekt mit allen Details
 * @returns {Object} Die gespeicherte Buchung mit generierter ID
 */
export const saveBooking = (booking) => {
  try {
    const bookings = getAllBookings();
    const newBooking = {
      ...booking,
      id: Date.now().toString(), // Eindeutige ID basierend auf Timestamp
      bookingDate: new Date().toISOString(), // Zeitpunkt der Buchung
    };
    bookings.push(newBooking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    return newBooking;
  } catch (error) {
    console.error('Fehler beim Speichern der Buchung:', error);
    throw error;
  }
};

/**
 * Buchung löschen/stornieren
 * @param {string} bookingId - ID der zu löschenden Buchung
 * @returns {boolean} true wenn erfolgreich gelöscht
 */
export const deleteBooking = (bookingId) => {
  try {
    const bookings = getAllBookings();
    const filteredBookings = bookings.filter(b => b.id !== bookingId);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(filteredBookings));
    return true;
  } catch (error) {
    console.error('Fehler beim Löschen der Buchung:', error);
    return false;
  }
};

/**
 * Prüft ob ein bestimmter Termin bereits doppelt gebucht ist
 * @param {string} day - Wochentag
 * @param {string} date - Datum
 * @param {string} time - Uhrzeit
 * @returns {number} Anzahl der Buchungen für diesen Termin
 */
export const getBookingCount = (day, date, time) => {
  const bookings = getAllBookings();
  return bookings.filter(b => 
    b.day === day && 
    b.date === date && 
    b.time === time
  ).length;
};

/**
 * Prüft ob ein Termin besetzt ist (2 oder mehr Buchungen)
 * @param {string} day - Wochentag
 * @param {string} date - Datum
 * @param {string} time - Uhrzeit
 * @returns {boolean} true wenn besetzt
 */
export const isSlotBooked = (day, date, time) => {
  return getBookingCount(day, date, time) >= 2;
};

/**
 * Gibt alle gebuchten Zeitslots zurück
 * @returns {Array} Array von gebuchten Slots mit day, date, time
 */
export const getAllBookedSlots = () => {
  const bookings = getAllBookings();
  const slotCounts = {};
  
  bookings.forEach(booking => {
    const key = `${booking.day}-${booking.date}-${booking.time}`;
    slotCounts[key] = (slotCounts[key] || 0) + 1;
  });
  
  return Object.keys(slotCounts)
    .filter(key => slotCounts[key] >= 2)
    .map(key => {
      const [day, date, time] = key.split('-');
      return { day, date, time };
    });
};
