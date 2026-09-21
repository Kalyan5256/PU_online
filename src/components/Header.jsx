import React from 'react';

export default function Header({ onOpenModal }) {
    return (
        <header className="poster-header">
            <div className="university-logo">
                <img src="/images/logoblackn.webp" alt="Parul University Logo" />
            </div>
            <div className="accreditation-badges">
                <span className="badge">NAAC A++ ACCREDITED</span>
                <span className="badge">UGC-ENTITLED</span>
            </div>
            <h1 className="main-title">Parul University Online</h1>
            <p className="sub-title">UGC Entitled Degree · Industry Centric · Flexible Learning</p>
            <div className="header-cta">
                <button className="btn-apply btn-apply-top" onClick={onOpenModal}>
                    ⚡ Apply Now
                </button>
            </div>
        </header>
    );
}

