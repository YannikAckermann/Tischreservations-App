import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './simple-page.css';
import './terms.css';

const Terms = () => {
    const navigate = useNavigate();
    const [clickCount, setClickCount] = useState(0);
    const [showEasterEgg, setShowEasterEgg] = useState(false);

    const handleTitleClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);
        
        if (newCount === 5) {
            setShowEasterEgg(true);
            // Konfetti-Effekt starten
            createConfetti();
        }
    };

    const createConfetti = () => {
        const colors = ['#4caf50', '#ff4757', '#ffd700', '#00bcd4', '#ff6b9d'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }
    };

    return (
        <div className="simple-page">
            <div className="simple-page-container terms-page">
                <button className="back-button" onClick={() => navigate('/')}>
                    ← Zurück
                </button>
                <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                    Allgemeine Geschäftsbedingungen (AGB)
                </h1>
                <p className="terms-intro">Letzte Aktualisierung: Irgendwann im Jahr 2025</p>

                {showEasterEgg && (
                    <div className="easter-egg-popup">
                        <div className="easter-egg-content">
                            <h2>🎉 EASTER EGG GEFUNDEN! 🎉</h2>
                            <p>Glückwunsch! Du hast das geheime Easter Egg entdeckt!</p>
                            <p>Du bist offiziell ein AGB-Meister! 🏆</p>
                            <p className="secret-message">
                                Geheimer Code: <strong>AGBKING2025</strong>
                            </p>
                            <p className="fun-fact">
                                Fun Fact: Nur 0.1% aller Menschen klicken 5 Mal auf einen AGB-Titel! 
                                Du gehörst zur Elite! 🌟
                            </p>
                            <button onClick={() => setShowEasterEgg(false)} className="close-easter-egg">
                                Awesome! ✨
                            </button>
                        </div>
                    </div>
                )}

                <div className="terms-content">
                    <section>
                        <h2>§1 - Das Kleingedruckte (das du trotzdem lesen solltest)</h2>
                        <p>Herzlich willkommen zu unseren AGBs! Ja, wir wissen, niemand liest diese Dinger. Aber hey, du bist hier! 🎉</p>
                        <p>Mit der Nutzung unserer Terminbuchungs-App erklärst du dich damit einverstanden, dass:</p>
                        <ul>
                            <li>Du tatsächlich zu deinen gebuchten Terminen erscheinst (Zeitreisen sind leider noch keine gültige Ausrede)</li>
                            <li>Du keine 47 Termine gleichzeitig buchst, nur um zu schauen, was passiert</li>
                            <li>Du akzeptierst, dass Kaffee keine offiziell anerkannte Währung für Terminbuchungen ist</li>
                        </ul>
                    </section>

                    <section>
                        <h2>§2 - Deine Rechte (Ja, du hast welche!)</h2>
                        <p>Du hast das Recht auf:</p>
                        <ul>
                            <li>Kostenlose Terminbuchung (so lange wir noch keine Geschäftsidee hatten)</li>
                            <li>Absagen von Terminen (aber bitte nicht 5 Sekunden vorher)</li>
                            <li>Beschwerden über rote Zeitslots (auch wenn das System perfekt funktioniert 😉)</li>
                            <li>Das Ignorieren dieser AGBs nach dem Lesen (wir wissen, dass du es tust)</li>
                        </ul>
                    </section>

                    <section>
                        <h2>§3 - Unsere Verpflichtungen (Was wir versprechen)</h2>
                        <p>Wir verpflichten uns:</p>
                        <ul>
                            <li>Die App so zu gestalten, dass sie nicht explodiert (meistens)</li>
                            <li>Deine Daten im LocalStorage zu speichern (und hoffen, dass du nicht auf "Browserdaten löschen" klickst)</li>
                            <li>Bugs als "Features" zu bezeichnen</li>
                            <li>Mindestens 60% der Zeit verfügbar zu sein (WLAN-Ausfall zählt nicht)</li>
                        </ul>
                    </section>

                    <section>
                        <h2>§4 - Verbotene Aktivitäten</h2>
                        <p>Folgendes ist strengstens untersagt:</p>
                        <ul>
                            <li>Versuche, die App mit Gedankenkraft zu steuern (funktioniert eh nicht)</li>
                            <li>Buchung von Terminen in der Vergangenheit (Zeitmaschinen sind noch in der Beta-Phase)</li>
                            <li>Spammen des "Meine Buchungen"-Buttons (er hat Gefühle!)</li>
                            <li>Beschweren über das dunkle Design (Dark Mode ist Leben!)</li>
                            <li>Füttern der Server nach Mitternacht (sie werden sonst zu Gremlins)</li>
                        </ul>
                    </section>

                    <section>
                        <h2>§5 - Haftungsausschluss</h2>
                        <p>Wir haften nicht für:</p>
                        <ul>
                            <li>Verpasste Termine wegen des "Snooze"-Buttons</li>
                            <li>Verwechslung von AM und PM</li>
                            <li>Deine Überraschung, wenn Montag-Termine tatsächlich montags stattfinden</li>
                            <li>Spontane Tanzeinlagen beim Anblick der grünen verfügbaren Slots</li>
                            <li>Suchtverhalten beim Buchen und Stornieren von Terminen</li>
                        </ul>
                    </section>

                    <section>
                        <h2>§6 - Datenschutz (Die ernst gemeinte Passage)</h2>
                        <p>Keine Sorge, deine Daten sind bei uns sicher! Warum? Weil sie nur in deinem Browser gespeichert werden. 
                        Wir haben buchstäblich keinen Zugriff darauf. Das ist nicht Datenschutz durch Design, sondern 
                        Datenschutz durch Faulheit. Aber hey, es funktioniert! 🔒</p>
                    </section>

                    <section>
                        <h2>§7 - Änderungen der AGBs</h2>
                        <p>Wir behalten uns das Recht vor, diese AGBs jederzeit zu ändern. Wahrscheinlich werden wir es nicht tun, 
                        aber das Recht haben wir trotzdem! Falls doch, versprechen wir, mindestens einen weiteren Witz einzubauen.</p>
                    </section>

                    <section>
                        <h2>§8 - Support & Hilfe</h2>
                        <p>Bei Fragen, Problemen oder einfach nur zum Chatten:</p>
                        <ul>
                            <li>Schreib eine E-Mail an: <code>support@imaginary-booking.dev</code> (Antwortzeit: 3-5 Geschäftstage oder nie)</li>
                            <li>Ruf unsere Hotline an: 0800-ICHBUCHENWAS (Keine echte Nummer, aber versuch's ruhig!)</li>
                            <li>Oder nutze einfach die App und buch einen Termin bei uns. Warte... 🤔</li>
                        </ul>
                    </section>

                    <section>
                        <h2>§9 - Schlussbestimmungen</h2>
                        <p>Falls eine Bestimmung dieser AGBs unwirksam sein sollte, bleiben die übrigen Bestimmungen davon unberührt. 
                        Diese Klausel klingt wichtig, oder? Wir haben sie aus einer echten AGB kopiert. 😎</p>
                        <p><strong>Wichtig:</strong> Mit der Nutzung dieser App bestätigst du, dass du diese AGBs gelesen hast 
                        (oder zumindest so getan hast) und mit einem Lächeln im Gesicht akzeptierst.</p>
                    </section>

                    <section className="terms-footer">
                        <p>🎈 Fun Fact: Du bist eine der wenigen Personen auf diesem Planeten, die tatsächlich AGBs gelesen haben. 
                        Du verdienst einen Cookie! 🍪 (Metaphorisch, wir haben leider keine echten Cookies.)</p>
                        <p className="signature">Mit freundlichen Grüßen,<br/>Das Terminbuchungs-Team 🚀</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
