import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './simple-page.css';
import './faq.css';
 
const faqs = [
    {
        question: "Wie buche ich einen Termin?",
        answer: "Wähle einfach einen grünen verfügbaren Zeitslot aus der Übersicht, fülle das Formular aus und bestätige deinen Termin. So einfach ist das!",
        icon: "❓",
    },
    {
        question: "Kann ich meinen Termin stornieren?",
        answer: "Natürlich! Gehe zu 'Meine Buchungen', wähle den Termin aus und klicke auf 'Termin absagen'. Du musst die Stornierung bestätigen.",
        icon: "🚫",
    },
    {
        question: "Was bedeuten die Farben?",
        answer: "Grün = verfügbar und buchbar, Rot = nicht verfügbar oder bereits gebucht. So einfach ist unser Farbsystem!",
        icon: "🎨",
    },
    {
        question: "Wo werden meine Daten gespeichert?",
        answer: "Alle deine Buchungen werden lokal in deinem Browser gespeichert (LocalStorage). Wir haben keinen Zugriff auf deine Daten!",
        icon: "🔒",
    },
    {
        question: "Kann ich mehrere Termine gleichzeitig buchen?",
        answer: "Ja! Du kannst so viele Termine buchen, wie du möchtest. Alle deine Buchungen findest du unter 'Meine Buchungen'.",
        icon: "📅",
    },
    {
        question: "Was passiert, wenn ich meinen Browser lösche?",
        answer: "Da wir LocalStorage verwenden, gehen alle Buchungen verloren, wenn du deine Browserdaten löschst. Also Vorsicht!",
        icon: "⚠️",
    },
];

const FAQ = () => {
    const navigate = useNavigate();
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="simple-page">
            <div className="simple-page-container faq-page">
                <button className="back-button" onClick={() => navigate('/')}>
                    ← Zurück
                </button>
                
                <div className="faq-header">
                    <h1>Häufig gestellte Fragen (FAQ)</h1>
                    <p className="faq-subtitle">Alles was du über unsere Terminbuchung wissen musst</p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
                        >
                            <div 
                                className="faq-question" 
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-icon">{faq.icon}</div>
                                <h3>{faq.question}</h3>
                                <span className="faq-toggle">
                                    {expandedIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-contact">
                    <h3>Noch Fragen?</h3>
                    <p>Wenn du deine Antwort hier nicht findest, kontaktiere uns gerne!</p>
                    <button 
                        className="contact-button"
                        onClick={() => navigate('/contact')}
                    >
                        Kontakt aufnehmen
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;