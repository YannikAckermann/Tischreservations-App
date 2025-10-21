import React from 'react';
import { useNavigate } from 'react-router-dom';
import './simple-page.css';
import './privacy.css';

const Privacy = () => {
    const navigate = useNavigate();

    return (
        <div className="simple-page">
            <div className="simple-page-container privacy-page">
                <button className="back-button" onClick={() => navigate('/')}>
                    ← Zurück
                </button>
                
                <div className="privacy-header">
                    <h1>Datenschutzerklärung</h1>
                    <p className="privacy-date">Stand: 21. Oktober 2025</p>
                </div>

                <div className="privacy-highlight">
                    <div className="highlight-icon">🔒</div>
                    <div className="highlight-content">
                        <h3>Deine Privatsphäre ist uns wichtig!</h3>
                        <p>Alle deine Daten werden ausschließlich lokal in deinem Browser gespeichert. 
                        Wir haben keinen Zugriff auf deine Informationen und speichern nichts auf unseren Servern.</p>
                    </div>
                </div>

                <div className="privacy-content">
                    <section className="privacy-section">
                        <h2>1. Datenerfassung und -speicherung</h2>
                        <p>
                            Bei der Nutzung unserer Terminbuchungs-App werden folgende Daten ausschließlich 
                            <strong> lokal in deinem Browser</strong> gespeichert:
                        </p>
                        <ul>
                            <li>Name</li>
                            <li>Email-Adresse</li>
                            <li>Telefonnummer</li>
                            <li>Gebuchte Termine (Datum, Uhrzeit)</li>
                        </ul>
                        <p className="highlight-text">
                            ✓ Diese Daten verlassen niemals deinen Browser<br />
                            ✓ Wir haben keinen Zugriff auf diese Informationen<br />
                            ✓ Es findet keine Übertragung an Server statt
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2>2. LocalStorage Technologie</h2>
                        <p>
                            Wir verwenden die Browser-Funktion "LocalStorage" zur Speicherung deiner Buchungsdaten. 
                            Das bedeutet:
                        </p>
                        <ul>
                            <li>Daten bleiben nur auf deinem Gerät</li>
                            <li>Keine Cloud-Synchronisation</li>
                            <li>Keine Server-seitige Speicherung</li>
                            <li>Du hast die volle Kontrolle über deine Daten</li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2>3. Cookies und Tracking</h2>
                        <p>
                            Wir verwenden <strong>keine Cookies</strong> und <strong>kein Tracking</strong>. 
                            Es gibt:
                        </p>
                        <ul>
                            <li>❌ Keine Analytics-Tools</li>
                            <li>❌ Keine Werbe-Tracker</li>
                            <li>❌ Keine Third-Party-Scripts</li>
                            <li>❌ Keine Benutzerprofile</li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2>4. Deine Rechte</h2>
                        <p>Du hast jederzeit die Möglichkeit:</p>
                        <ul>
                            <li><strong>Daten löschen:</strong> Lösche deine Browser-Daten oder Cache</li>
                            <li><strong>Buchungen stornieren:</strong> Nutze die "Meine Buchungen" Funktion</li>
                            <li><strong>Komplette Kontrolle:</strong> Alle Daten liegen bei dir</li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2>5. Datensicherheit</h2>
                        <p>
                            Da alle Daten nur lokal gespeichert werden, ist die Sicherheit durch deinen 
                            Browser gewährleistet. Wir empfehlen:
                        </p>
                        <ul>
                            <li>Verwende einen aktuellen Browser</li>
                            <li>Aktiviere Browsersicherheitsfunktionen</li>
                            <li>Teile dein Gerät nicht mit Unbefugten</li>
                        </ul>
                    </section>

                    <section className="privacy-section">
                        <h2>6. Kontaktformular</h2>
                        <p>
                            Wenn du unser Kontaktformular nutzt, werden die eingegebenen Daten 
                            <strong> nicht gespeichert</strong>. Das Formular ist rein demonstrativ und 
                            sendet keine tatsächlichen Nachrichten.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2>7. Änderungen der Datenschutzerklärung</h2>
                        <p>
                            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an 
                            geänderte Rechtslage oder Änderungen unserer Dienstleistungen anzupassen.
                        </p>
                    </section>

                    <section className="privacy-section">
                        <h2>8. Kontakt</h2>
                        <p>
                            Bei Fragen zum Datenschutz kannst du uns kontaktieren:
                        </p>
                        <div className="contact-info">
                            <p>📧 Email: datenschutz@terminbuchung.ch</p>
                            <p>📞 Telefon: +41 79 123 45 67</p>
                        </div>
                    </section>
                </div>

                <div className="privacy-footer">
                    <div className="footer-icon">✓</div>
                    <h3>100% Datenschutz garantiert</h3>
                    <p>Deine Daten gehören dir - und bleiben bei dir!</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
