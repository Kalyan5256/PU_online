import React, { useEffect, useState, useRef } from 'react';
import LandingHeader from '../components/LandingHeader';
import ApplicationForm from '../components/ApplicationForm';
import FeaturesGrid from '../components/FeaturesGrid';
import BottomCTA from '../components/BottomCTA';
import ContactGrid from '../components/ContactGrid';
import SuccessModal from '../components/SuccessModal';
import { initGoogleTag, trackGoogleConversion } from '../services/tracking';

export default function GoogleApplyPage() {
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        // Initialize Google Tag
        initGoogleTag();
    }, []);

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            const input = formRef.current.querySelector('input');
            if (input) setTimeout(() => input.focus(), 600);
        }
    };

    return (
        <div className="landing-container">
            <LandingHeader onApplyClick={scrollToForm} />

            <main className="landing-main">
                <section className="landing-hero">
                    <div className="hero-content">
                        <span className="campaign-tag">🎯 Google Admissions Portal · 2026-27</span>
                        <h1 className="landing-title">Parul University Online Degree Admissions 2026-27</h1>
                        <p className="landing-subtitle">
                            Fast-track your degree with India's premier NAAC A++ accredited university. Offering UGC-entitled BBA, BCA, MBA, MCA, and Diploma programs with complete flexibility and easy EMI.
                        </p>

                        <div className="landing-stats-grid">
                            <div className="stat-card">
                                <span className="stat-icon">🎓</span>
                                <div className="stat-info">
                                    <strong>UGC & AICTE</strong>
                                    <small>Fully Entitled Degrees</small>
                                </div>
                            </div>
                            <div className="stat-card">
                                <span className="stat-icon">💼</span>
                                <div className="stat-info">
                                    <strong>2,200+</strong>
                                    <small>Placement Partners</small>
                                </div>
                            </div>
                            <div className="stat-card">
                                <span className="stat-icon">🏆</span>
                                <div className="stat-info">
                                    <strong>60 LPA</strong>
                                    <small>Highest Package Offered</small>
                                </div>
                            </div>
                            <div className="stat-card">
                                <span className="stat-icon">💳</span>
                                <div className="stat-info">
                                    <strong>Easy EMI</strong>
                                    <small>Starting ~ ₹68/day</small>
                                </div>
                            </div>
                        </div>

                        <div className="trust-notice">
                            <span className="notice-icon">📋</span>
                            <p><strong>Immediate Counselling:</strong> Complete fee breakdown, syllabus copy, and eligibility check within 24 hours!</p>
                        </div>
                    </div>

                    <div className="landing-form-wrapper" ref={formRef} id="applySection">
                        <div className="landing-form-card">
                            <div className="form-header-badge">Google Ads Application</div>
                            <h2 className="form-card-title">📝 Apply for 2026-27</h2>
                            <p className="form-card-sub">Submit your details to check course eligibility and scholarships.</p>

                            <ApplicationForm 
                                source="Google Ads Campaign"
                                isInline={true}
                                onSuccess={() => setIsSuccessOpen(true)}
                                onConversion={() => trackGoogleConversion()}
                            />
                        </div>
                    </div>
                </section>

                <FeaturesGrid />

                <BottomCTA 
                    title="Secure Your Admission for 2026-27"
                    subtitle="Admissions are open for a limited period. Register now to avail early scholarship benefits."
                    onApplyClick={scrollToForm}
                />

                <ContactGrid title="📞 Regional Language Support & Counselling" />
            </main>

            <footer className="landing-footer">
                <p>© 2026 Parul University Online. All rights reserved. UGC-Entitled & NAAC A++ Accredited.</p>
            </footer>

            <SuccessModal 
                isOpen={isSuccessOpen} 
                onClose={() => setIsSuccessOpen(false)} 
            />
        </div>
    );
}
