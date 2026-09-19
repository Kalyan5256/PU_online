import React, { useEffect } from 'react';
import { contactHelplines } from '../data/contacts';

export default function SuccessModal({ isOpen, onClose, preferredLanguage = '' }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Find contact helpline matching the selected preferred language (fallback to first contact)
    const matchedContact = contactHelplines.find(
        (item) => item.label.toLowerCase() === (preferredLanguage || '').toLowerCase()
    ) || contactHelplines[0];

    return (
        <div className="modal-overlay success-modal active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="modal-box">
                <button className="close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
                <div className="success-icon">🎉</div>
                <div className="success-title">Thank You!</div>
                <div className="success-msg">
                    Your application has been submitted successfully.<br /><br />
                    <strong>Our academic team will reach out to you within 24 hours.</strong><br /><br />
                    
                    <div style={{
                        background: 'rgba(255, 183, 3, 0.08)',
                        border: '1px solid rgba(255, 183, 3, 0.25)',
                        borderRadius: '12px',
                        padding: '14px 16px',
                        marginTop: '10px',
                        textAlign: 'center'
                    }}>
                        <p style={{ margin: '0 0 6px 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                            📞 Need immediate assistance in <strong>{matchedContact.label} ({matchedContact.lang})</strong>?
                        </p>
                        <a 
                            href={`tel:${matchedContact.tel}`} 
                            style={{ 
                                color: 'var(--secondary)', 
                                textDecoration: 'none', 
                                fontWeight: '800',
                                fontSize: '1.15rem',
                                letterSpacing: '0.5px',
                                display: 'inline-block'
                            }}
                        >
                            {matchedContact.phone}
                        </a>
                        <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                            Tap to call your dedicated regional counsellor
                        </span>
                    </div>
                </div>
                <button className="btn-close-success" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
