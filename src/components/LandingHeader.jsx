import React from 'react';

export default function LandingHeader({ onApplyClick }) {
    return (
        <header className="landing-header">
            <div className="landing-header-inner">
                <a href="/" className="landing-logo-link" title="Parul University Online">
                    <div className="landing-logo">
                        <img src="/images/logoblackn.webp" alt="Parul University Logo" />
                    </div>
                </a>
                <div className="landing-header-badges">
                    <span className="badge">NAAC A++ ACCREDITED</span>
                    <span className="badge">UGC-ENTITLED</span>
                </div>
                <button 
                    onClick={onApplyClick} 
                    className="btn-apply btn-apply-landing btn-apply-top-landing"
                >
                    Apply Now
                </button>
            </div>
        </header>
    );
}
