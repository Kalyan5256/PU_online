import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/SEO';
import LandingHeader from '../components/LandingHeader';
import ApplicationForm from '../components/ApplicationForm';
import FeaturesGrid from '../components/FeaturesGrid';
import BottomCTA from '../components/BottomCTA';
import ContactGrid from '../components/ContactGrid';
import SuccessModal from '../components/SuccessModal';
import { initMetaPixel, trackMetaLead } from '../services/tracking';

export default function MetaApplyPage() {
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [submittedLanguage, setSubmittedLanguage] = useState('');
    const formRef = useRef(null);

    useEffect(() => {
        // Initialize Meta Pixel
        initMetaPixel();
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
            <SEO 
                title="Apply Now | Parul University Online Degrees 2026-27 | Meta Campaign"
                description="Apply for NAAC A++ accredited Parul University Online Degrees. UGC entitled BBA, BCA, MBA, MCA and Diploma courses with zero-cost EMI starting at ₹68/day."
                keywords="Parul University online degree, NAAC A++ university, online MBA course, online MCA course, flexible degree India, Parul University admissions"
                canonical="https://pu-online.vercel.app/meta-apply"
            />

            <LandingHeader onApplyClick={scrollToForm} />

            <main className="landing-main">
                <section className="landing-hero">
                    <div className="hero-content">
                        <span className="campaign-tag">📱 Exclusive Meta Offer · Admissions 2026-27</span>
                        <h1 className="landing-title">Upgrade Your Career with NAAC A++ Online Degrees</h1>
                        <p className="landing-subtitle">
                            Learn at your own pace from anywhere with industry-designed curriculum, live masterclasses, and dedicated placement support across 2,200+ top recruiters.
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
                                    <small>Recruiting Partners</small>
                                </div>
                            </div>
                            <div className="stat-card">
                                <span className="stat-icon">🏆</span>
                                <div className="stat-info">
                                    <strong>60 LPA</strong>
                                    <small>Highest CTC Offered</small>
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
                            <span className="notice-icon">🎁</span>
                            <p><strong>Meta Special:</strong> Free hard copy Self-Learning Material (SLM) & In-Demand Certifications included!</p>
                        </div>
                    </div>

                    <div className="landing-form-wrapper" ref={formRef} id="applySection">
                        <div className="landing-form-card">
                            <div className="form-header-badge">Meta Campaign Form</div>
                            <h2 className="form-card-title">📝 Quick Application</h2>
                            <p className="form-card-sub">Submit your details for 1-on-1 expert admission guidance.</p>

                            <ApplicationForm 
                                source="Meta Ads Campaign"
                                isInline={true}
                                onSuccess={(data) => {
                                    setSubmittedLanguage(data?.language || '');
                                    setIsSuccessOpen(true);
                                }}
                                onConversion={(course, status) => trackMetaLead(course, status)}
                            />
                        </div>
                    </div>
                </section>

                <FeaturesGrid />

                <BottomCTA 
                    title="Take Charge of Your Career Today"
                    subtitle="Limited seats available for the 2026-27 academic session. Speak to an admission counsellor now."
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
                preferredLanguage={submittedLanguage}
            />
        </div>
    );
}
