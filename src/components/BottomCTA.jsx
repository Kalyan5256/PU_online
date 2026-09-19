import React from 'react';

export default function BottomCTA({ 
    title = "Ready to Take the Next Step in Your Career?", 
    subtitle = "Admissions for the 2026-27 academic session are closing soon. Secure your seat today.", 
    onApplyClick 
}) {
    return (
        <section className="landing-bottom-cta">
            <div className="bottom-cta-content">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <div className="bottom-cta-actions">
                    <button 
                        onClick={onApplyClick} 
                        className="btn-apply btn-apply-landing btn-apply-bottom-landing"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    );
}
