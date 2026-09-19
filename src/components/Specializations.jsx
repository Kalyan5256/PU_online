import React from 'react';
import { mbaSpecializations, mcaSpecializations } from '../data/courses';

export default function Specializations() {
    return (
        <>
            {/* MBA SPECIALIZATIONS */}
            <section className="fee-section">
                <h2 className="section-title">📊 MBA Specializations (20+)</h2>
                <div className="spec-list">
                    {mbaSpecializations.map((spec, idx) => (
                        <span key={idx} className="spec-tag">{spec}</span>
                    ))}
                </div>
            </section>

            {/* MCA SPECIALIZATIONS */}
            <section className="fee-section">
                <h2 className="section-title">💻 MCA Specializations</h2>
                <div className="spec-list">
                    {mcaSpecializations.map((spec, idx) => (
                        <span key={idx} className="spec-tag">{spec}</span>
                    ))}
                </div>
                <div style={{ marginTop: '12px', background: 'rgba(255,183,3,0.05)', borderRadius: '8px', padding: '12px 16px', borderLeft: '3px solid var(--secondary)' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                        <strong style={{ color: '#ffb703' }}>🎁 Free In-Demand Self-Paced Certifications</strong> —
                        Get free hard copies of Self-Learning Material (SLM) for all semesters!
                    </p>
                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="benefits-section">
                <h2 className="section-title">🌟 Why Choose Parul University Online?</h2>
                <section className="reason-image-section">
                    <img src="/images/mba_reason.webp" alt="Why Parul University" className="reason-image" />
                </section>
            </section>
        </>
    );
}
