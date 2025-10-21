import React from 'react';
import { useNavigate } from 'react-router-dom';
import './simple-page.css';
import './about.css';

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div className="simple-page">
            <div className="simple-page-container about-page">
                <button className="back-button" onClick={() => navigate('/')}>
                    ← Zurück
                </button>
                
                <div className="about-header">
                    <h1>Über Uns</h1>
                    <p className="about-subtitle">Deine moderne Lösung für einfache Terminbuchung</p>
                </div>

                <div className="about-content">
                    <div className="about-section">
                        <div className="section-icon">🎯</div>
                        <h2>Unsere Mission</h2>
                        <p>
                            Wir wollen Terminbuchungen so einfach wie möglich machen. Keine komplizierten Formulare, 
                            keine unnötigen Schritte - einfach auswählen, bestätigen, fertig!
                        </p>
                    </div>

                    <div className="about-section">
                        <div className="section-icon">💡</div>
                        <h2>Unsere Vision</h2>
                        <p>
                            Eine Welt, in der jeder innerhalb von Sekunden seinen Wunschtermin buchen kann. 
                            Transparent, benutzerfreundlich und ohne Hürden.
                        </p>
                    </div>

                    <div className="about-section">
                        <div className="section-icon">🚀</div>
                        <h2>Unsere Technologie</h2>
                        <p>
                            Gebaut mit modernsten Web-Technologien: React, Vite und LocalStorage für maximale 
                            Geschwindigkeit und Datenschutz. Alle Daten bleiben in deinem Browser!
                        </p>
                    </div>

                    <div className="about-section">
                        <div className="section-icon">🌟</div>
                        <h2>Warum wir?</h2>
                        <ul className="feature-list">
                            <li>✓ Blitzschnelle Buchungen in Sekunden</li>
                            <li>✓ Übersichtliche Kalenderansicht</li>
                            <li>✓ Einfache Stornierungen möglich</li>
                            <li>✓ 100% Datenschutz - alles lokal gespeichert</li>
                            <li>✓ Keine Registrierung erforderlich</li>
                            <li>✓ Responsive Design für alle Geräte</li>
                        </ul>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Datenschutz</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">{"< 10s"}</div>
                            <div className="stat-label">Buchungszeit</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Verfügbar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
