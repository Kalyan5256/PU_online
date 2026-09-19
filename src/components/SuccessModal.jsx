import React, { useEffect } from 'react';

export default function SuccessModal({ isOpen, onClose }) {
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

    return (
        <div className="modal-overlay success-modal active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="modal-box">
                <button className="close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
                <div className="success-icon">🎉</div>
                <div className="success-title">Thank You!</div>
                <div className="success-msg">
                    Your application has been submitted successfully.<br /><br />
                    <strong>Our team will reach out to you within 24 hours</strong> regarding your query.<br /><br />
                    📞 For urgent assistance, call us at <strong>+91 79951 53880</strong>
                </div>
                <button className="btn-close-success" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
