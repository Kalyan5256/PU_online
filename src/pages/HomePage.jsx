import React, { useState } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import FeeTables from '../components/FeeTables';
import Specializations from '../components/Specializations';
import ContactGrid from '../components/ContactGrid';
import ApplicationModal from '../components/ApplicationModal';
import SuccessModal from '../components/SuccessModal';

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [submittedLanguage, setSubmittedLanguage] = useState('');

    return (
        <div className="poster-container">
            <SEO 
                title="Parul University Online Programs 2026-27 | UGC Approved Degrees"
                description="Parul University Online offers UGC-entitled UG, PG, Diploma & PG Diploma programs. NAAC A++ accredited. Flexible online learning with EMI options starting at ₹68/day. Apply now for 2026-27."
                keywords="Parul University Online, online degree, UGC entitled, NAAC A++, BBA online, MBA online, MCA online, Digital Marketing diploma, online education India, distance learning, Parul University fees, online programs 2026"
                canonical="https://pu-online.vercel.app/"
            />

            <Header onOpenModal={() => setIsModalOpen(true)} />

            <main className="poster-body">
                <FeeTables />
                <Specializations />
            </main>

            <footer className="poster-footer">
                <div className="cta-details">
                    <p><strong>Admissions Open:</strong> Easy EMI options available</p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        📌 Placement Support · 2,200+ Recruiters · 60 LPA Highest Package
                    </p>
                </div>
                <button 
                    className="btn-apply" 
                    id="openModalBtn" 
                    onClick={() => setIsModalOpen(true)}
                >
                    Apply Now
                </button>
            </footer>

            <ContactGrid />

            {/* Application Modal */}
            <ApplicationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onSuccess={(data) => {
                    setSubmittedLanguage(data?.language || '');
                    setIsSuccessOpen(true);
                }}
                source="Website Organic"
            />

            {/* Success Modal */}
            <SuccessModal 
                isOpen={isSuccessOpen} 
                onClose={() => setIsSuccessOpen(false)} 
                preferredLanguage={submittedLanguage}
            />
        </div>
    );
}
