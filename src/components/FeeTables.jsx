import React from 'react';
import { undergraduatePrograms, postgraduatePrograms, diplomaPrograms } from '../data/courses';

export default function FeeTables() {
    return (
        <>
            {/* UNDERGRADUATE PROGRAMS */}
            <section className="fee-section">
                <h2 className="section-title">🎓 Undergraduate Programs (3 Years)</h2>
                <div className="elig-note">
                    <strong>Eligibility:</strong> 10+2 with 40% marks (any stream)
                </div>
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
                            {undergraduatePrograms.map((prog, idx) => (
                                <tr key={idx}>
                                    <td><strong>{prog.name}</strong></td>
                                    <td>{prog.eligibility}</td>
                                    <td>{prog.duration}</td>
                                    <td>{prog.totalFee}</td>
                                    <td className="highlight-fee">{prog.perDay}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* POSTGRADUATE PROGRAMS */}
            <section className="fee-section">
                <h2 className="section-title">📘 Postgraduate Programs (2 Years)</h2>
                <div className="elig-note">
                    <strong>Eligibility:</strong> Graduation with 40% marks (relevant discipline)
                </div>
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
                            {postgraduatePrograms.map((prog, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <strong>{prog.name}</strong>
                                        {prog.specNote && (
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
                            {diplomaPrograms.map((prog, idx) => (
                                <tr key={idx} className={prog.isDemand ? "demand-row" : ""}>
                                    <td>
                                        <strong>{prog.name}</strong>
                                        {prog.isDemand && <span className="demand-tag">⭐ Most Demanded</span>}
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
