import React, { useState } from 'react';
import Header from '../components/Header';
import FeeTables from '../components/FeeTables';
import Specializations from '../components/Specializations';
import ContactGrid from '../components/ContactGrid';
import ApplicationModal from '../components/ApplicationModal';
import SuccessModal from '../components/SuccessModal';

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    return (
        <div className="poster-container">
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
                onSuccess={() => setIsSuccessOpen(true)}
                source="Website Organic"
            />

            {/* Success Modal */}
            <SuccessModal 
                isOpen={isSuccessOpen} 
                onClose={() => setIsSuccessOpen(false)} 
            />
        </div>
    );
}
