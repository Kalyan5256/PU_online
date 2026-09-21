import React, { useState } from 'react';
import { undergraduatePrograms, postgraduatePrograms, diplomaPrograms } from '../data/courses';

export default function FeeTables() {
    const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'

    const renderTable = (programs, hasDemand = false, hasSpec = false) => (
        <div className="fee-table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Program</th>
                        <th>Eligibility</th>
                        <th>Duration</th>
                        <th>Total Fee</th>
                        <th>Per Day*</th>
                    </tr>
                </thead>
                <tbody>
                    {programs.map((prog, idx) => (
                        <tr key={idx} className={prog.isDemand ? "demand-row" : ""}>
                            <td>
                                <strong>{prog.name}</strong>
                                {hasDemand && prog.isDemand && <span className="demand-tag">⭐ Most Demanded</span>}
                                {hasSpec && prog.specNote && (
                                    <span style={{ fontSize: '0.65rem', color: '#ffb703', marginLeft: '6px' }}>
                                        {prog.specNote}
                                    </span>
                                )}
                            </td>
                            <td>{prog.eligibility}</td>
                            <td>{prog.duration}</td>
                            <td>{prog.totalFee}</td>
                            <td className="highlight-fee">{prog.perDay}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderCards = (programs, hasDemand = false, hasSpec = false) => (
        <div className="fee-cards-mobile">
            {programs.map((prog, idx) => (
                <div key={idx} className={`mobile-course-card ${prog.isDemand ? 'demand-card' : ''}`}>
                    <div className="mobile-course-header">
                        <div className="mobile-course-title">
                            <strong>{prog.name}</strong>
                            {hasSpec && prog.specNote && (
                                <span className="mobile-spec-note">{prog.specNote}</span>
                            )}
                        </div>
                        {hasDemand && prog.isDemand && (
                            <span className="demand-tag">⭐ Most Demanded</span>
                        )}
                    </div>
                    
                    <div className="mobile-course-details">
                        <div className="mobile-detail-item">
                            <span className="mobile-detail-label">Duration</span>
                            <span className="mobile-detail-val">{prog.duration}</span>
                        </div>
                        <div className="mobile-detail-item">
                            <span className="mobile-detail-label">Eligibility</span>
                            <span className="mobile-detail-val">{prog.eligibility}</span>
                        </div>
                        <div className="mobile-detail-item">
                            <span className="mobile-detail-label">Total Fee</span>
                            <span className="mobile-detail-val fee-val">{prog.totalFee}</span>
                        </div>
                        <div className="mobile-detail-item highlight">
                            <span className="mobile-detail-label">Per Day*</span>
                            <span className="mobile-detail-val per-day-val">{prog.perDay}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <>
            {/* View Switcher for Mobile */}
            <div className="mobile-view-switcher">
                <span className="switcher-label">View Mode:</span>
                <div className="switcher-buttons">
                    <button 
                        type="button" 
                        className={`switcher-btn ${viewMode === 'cards' ? 'active' : ''}`}
                        onClick={() => setViewMode('cards')}
                    >
                        📱 Cards
                    </button>
                    <button 
                        type="button" 
                        className={`switcher-btn ${viewMode === 'table' ? 'active' : ''}`}
                        onClick={() => setViewMode('table')}
                    >
                        📊 Table
                    </button>
                </div>
            </div>

            {/* UNDERGRADUATE PROGRAMS */}
            <section className="fee-section">
                <h2 className="section-title">🎓 Undergraduate Programs (3 Years)</h2>
                <div className="elig-note">
                    <strong>Eligibility:</strong> 10+2 with 40% marks (any stream)
                </div>
                {viewMode === 'cards' ? (
                    <>
                        <div className="desktop-table-container">
                            {renderTable(undergraduatePrograms)}
                        </div>
                        <div className="mobile-cards-container">
                            {renderCards(undergraduatePrograms)}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="table-scroll-hint">
                            <span>👉 Swipe table horizontally to view all columns</span>
                        </div>
                        {renderTable(undergraduatePrograms)}
                    </>
                )}
            </section>

            {/* POSTGRADUATE PROGRAMS */}
            <section className="fee-section">
                <h2 className="section-title">📘 Postgraduate Programs (2 Years)</h2>
                <div className="elig-note">
                    <strong>Eligibility:</strong> Graduation with 40% marks (relevant discipline)
                </div>
                {viewMode === 'cards' ? (
                    <>
                        <div className="desktop-table-container">
                            {renderTable(postgraduatePrograms, false, true)}
                        </div>
                        <div className="mobile-cards-container">
                            {renderCards(postgraduatePrograms, false, true)}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="table-scroll-hint">
                            <span>👉 Swipe table horizontally to view all columns</span>
                        </div>
                        {renderTable(postgraduatePrograms, false, true)}
                    </>
                )}
                <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ background: 'rgba(255,183,3,0.10)', border: '1px solid rgba(255,183,3,0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', color: '#ffd966' }}>
                        Dual Degree with 30% Scholarship
                    </span>
                    <span style={{ background: 'rgba(255,183,3,0.10)', border: '1px solid rgba(255,183,3,0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', color: '#ffd966' }}>
                        Free SLM + Certifications
                    </span>
                </div>
            </section>

            {/* DIPLOMA & PG DIPLOMA */}
            <section className="fee-section">
                <h2 className="section-title">📜 Diploma & PG Diploma (1 Year)</h2>
                <div className="elig-note">
                    <strong>Eligibility:</strong> 10+2 with 40% marks (for Diploma) · Graduation 40% (for PG Diploma)
                </div>
                {viewMode === 'cards' ? (
                    <>
                        <div className="desktop-table-container">
                            {renderTable(diplomaPrograms, true, false)}
                        </div>
                        <div className="mobile-cards-container">
                            {renderCards(diplomaPrograms, true, false)}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="table-scroll-hint">
                            <span>👉 Swipe table horizontally to view all columns</span>
                        </div>
                        {renderTable(diplomaPrograms, true, false)}
                    </>
                )}
                <div className="highlight-box">
                    <span className="label">🔥 Most In-Demand:</span>
                    <span className="value">Diploma in Digital Marketing — industry-aligned curriculum, high placement potential</span>
                </div>
                <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    <span className="spec-tag">Designed for Working Professionals</span>
                    <span className="spec-tag">Industry-Centric Curriculum</span>
                    <span className="spec-tag">Expert Faculty & Corporate Insights</span>
                    <span className="spec-tag">Flexible Online Learning</span>
                    <span className="spec-tag">High-End Animated Videos</span>
                </div>
            </section>
        </>
    );
}

