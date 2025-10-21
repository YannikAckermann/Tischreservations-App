import React from 'react';
import { useNavigate } from 'react-router-dom';
import './simple-page.css';
import './help.css';

const Help = () => {
    const navigate = useNavigate();

    const guides = [
        {
            icon: '📅',
            title: 'Termin buchen',
            steps: [
                'Wähle einen Tag aus der Übersicht',
                'Klicke auf einen grünen (verfügbaren) Zeitslot',
                'Fülle das Formular mit deinen Daten aus',
                'Bestätige deinen Termin',
                'Fertig! Du erhältst eine Bestätigung'
            ]
        },
        {
            icon: '🗑️',
            title: 'Termin stornieren',
            steps: [
                'Klicke auf "Meine Buchungen" in der Übersicht',
                'Finde den Termin, den du stornieren möchtest',
                'Klicke auf "Termin absagen"',
                'Bestätige die Stornierung im Popup',
                'Der Termin wird sofort gelöscht'
            ]
        },
        {
            icon: '👀',
            title: 'Buchungen verwalten',
            steps: [
                'Gehe zur Startseite',
                'Klicke auf den Button "Meine Buchungen"',
                'Hier siehst du alle deine Termine',
                'Die Termine sind nach Datum sortiert',
                'Du kannst jeden Termin einzeln stornieren'
            ]
        },
        {
            icon: '🎨',
            title: 'Farben verstehen',
            steps: [
                'Grün = Termin ist verfügbar und kann gebucht werden',
                'Rot = Termin ist nicht verfügbar oder bereits besetzt',
                'Grauer Hintergrund = Normale Ansicht',
                'Grüne Akzente = Wichtige Buttons und Aktionen'
            ]
        }
    ];

    const tips = [
        {
            icon: '💡',
            title: 'Schnell-Tipp',
            text: 'Nutze die "Meine Buchungen" Seite, um alle deine Termine auf einen Blick zu sehen!'
        },
        {
            icon: '🔒',
            title: 'Datenschutz',
            text: 'Alle deine Daten werden nur lokal in deinem Browser gespeichert - niemals auf einem Server!'
        },
        {
            icon: '⚡',
            title: 'Performance',
            text: 'Die App funktioniert blitzschnell, weil alles lokal gespeichert wird - keine Wartezeiten!'
        },
        {
            icon: '📱',
            title: 'Mobil',
            text: 'Die App ist vollständig responsive und funktioniert perfekt auf allen Geräten!'
        }
    ];

    return (
        <div className="simple-page">
            <div className="simple-page-container help-page">
                <button className="back-button" onClick={() => navigate('/')}>
                    ← Zurück
                </button>
                
                <div className="help-header">
                    <h1>Hilfe & Anleitungen</h1>
                    <p className="help-subtitle">Alles was du wissen musst, um loszulegen</p>
                </div>

                <div className="guides-section">
                    <h2 className="section-title">📖 Schritt-für-Schritt Anleitungen</h2>
                    <div className="guides-grid">
                        {guides.map((guide, index) => (
                            <div key={index} className="guide-card">
                                <div className="guide-icon">{guide.icon}</div>
                                <h3>{guide.title}</h3>
                                <ol className="guide-steps">
                                    {guide.steps.map((step, stepIndex) => (
                                        <li key={stepIndex}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tips-section">
                    <h2 className="section-title">💎 Nützliche Tipps</h2>
                    <div className="tips-grid">
                        {tips.map((tip, index) => (
                            <div key={index} className="tip-card">
                                <div className="tip-icon">{tip.icon}</div>
                                <h3>{tip.title}</h3>
                                <p>{tip.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="help-actions">
                    <div className="action-card">
                        <h3>Noch Fragen?</h3>
                        <p>Schau dir unsere FAQ an oder kontaktiere uns direkt!</p>
                        <div className="action-buttons">
                            <button onClick={() => navigate('/faq')} className="action-button primary">
                                Zu den FAQs
                            </button>
                            <button onClick={() => navigate('/contact')} className="action-button secondary">
                                Kontakt aufnehmen
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
