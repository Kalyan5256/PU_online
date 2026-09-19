import React from 'react';

export default function FeaturesGrid() {
    return (
        <section className="landing-features-section">
            <h2 className="section-title text-center">🌟 Why Study at Parul University Online?</h2>
            
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">🏛️</div>
                    <h3>NAAC A++ Accredited</h3>
                    <p>Ranked among top universities in India with global standards in education, faculty excellence, and academic rigor.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">💻</div>
                    <h3>Interactive Digital LMS</h3>
                    <p>Access high-end animated lectures, live masterclasses, e-books, and 24/7 student learning support anywhere, anytime.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🤝</div>
                    <h3>Dedicated Placement Cell</h3>
                    <p>Interview preparation, resume building workshops, and direct hiring drives with 2,200+ national and multinational recruiters.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">💰</div>
                    <h3>Affordable Zero-Cost EMI</h3>
                    <p>Flexible semester fees starting at just ₹68/day with 0% interest EMI options to make quality education accessible.</p>
                </div>
            </div>

            <div className="reason-image-section">
                <img src="/images/mba_reason.webp" alt="Why Parul University" className="reason-image" />
            </div>
        </section>
    );
}
