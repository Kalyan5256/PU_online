import React, { useEffect } from 'react';
import ApplicationForm from './ApplicationForm';

export default function ApplicationModal({ isOpen, onClose, onSuccess, source = 'Website Organic' }) {
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
        <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="modal-box">
                <button className="close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
                <div className="modal-title">📝 Apply Now</div>
                <div className="modal-sub">Fill in your details and our team will contact you within 24 hours.</div>

                <ApplicationForm 
                    source={source} 
                    onSuccess={(data) => {
                        onClose();
                        if (onSuccess) onSuccess(data);
                    }}
                    isInline={false}
                />
            </div>
        </div>
    );
}
