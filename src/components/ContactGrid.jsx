import React from 'react';
import { contactHelplines } from '../data/contacts';

export default function ContactGrid({ title = "📞 Contact Us (Regional Languages)" }) {
    return (
        <div className="contact-section">
            <h2 className="section-title">{title}</h2>
            <div className="contact-grid">
                {contactHelplines.map((item, idx) => (
                    <a key={idx} href={`tel:${item.tel}`} className="contact-card">
                        <span className="lang">{item.lang}</span>
                        <span className="phone">
                            {item.phone} <small>{item.label}</small>
                        </span>
                    </a>
                ))}
            </div>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '6px', textAlign: 'center' }}>
                * Tap any card to call – regional support available during business hours
            </p>
        </div>
    );
}
