import React, { useState } from 'react';
import { submitApplication } from '../services/api';

export default function ApplicationForm({ 
    source = 'Website Organic', 
    onSuccess, 
    onConversion,
    isInline = false 
}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');
    const [language, setLanguage] = useState('');
    const [status, setStatus] = useState('');
    const [bestTime, setBestTime] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        if (!name.trim() || !phone.trim() || !course || !language || !status || !bestTime) {
            setErrorMsg('Please fill in all required fields (marked with *).');
            return;
        }

        if (!/^\d{10}$/.test(phone.trim())) {
            setErrorMsg('Please enter a valid 10-digit mobile number.');
            return;
        }

        setIsSubmitting(true);

        const formData = {
            studentName: name.trim(),
            phoneNumber: phone.trim(),
            interestedCourse: course,
            preferredLanguage: language,
            studentStatus: status,
            bestTimeToCall: bestTime,
            message: message.trim(),
            source: source
        };

        try {
            await submitApplication(formData);

            // Trigger conversion tracking if provided (Meta Pixel Lead / Google Ads conversion)
            if (onConversion) {
                onConversion(course, status);
            }

            const submittedData = {
                language,
                course,
                phone,
                name
            };

            // Reset form
            setName('');
            setPhone('');
            setCourse('');
            setLanguage('');
            setStatus('');
            setBestTime('');
            setMessage('');

            if (onSuccess) {
                onSuccess(submittedData);
            }
        } catch (err) {
            console.error('Submission failed:', err);
            setErrorMsg('Something went wrong. Please try again or call our helpline directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={isInline ? "landing-form" : ""}>
            {errorMsg && (
                <div style={{
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    color: '#fca5a5',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    marginBottom: '14px'
                }}>
                    ⚠️ {errorMsg}
                </div>
            )}

            <div className={isInline ? "form-group" : ""}>
                <label htmlFor="studentName">Full Name <span className="required">*</span></label>
                <input 
                    type="text" 
                    id="studentName" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name" 
                    required 
                    autoComplete="name"
                />
            </div>

            <div className={isInline ? "form-group" : ""}>
                <label htmlFor="phoneNumber">Phone Number <span className="required">*</span></label>
                {isInline ? (
                    <div className="phone-input-wrapper">
                        <span className="country-prefix">+91</span>
                        <input 
                            type="tel" 
                            id="phoneNumber" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                            placeholder="Enter 10-digit mobile number" 
                            required 
                            maxLength={10}
                            autoComplete="tel"
                        />
                    </div>
                ) : (
                    <input 
                        type="tel" 
                        id="phoneNumber" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder="Enter 10-digit mobile number" 
                        required 
                        maxLength={10}
                        autoComplete="tel"
                    />
                )}
            </div>

            <div className={isInline ? "form-group" : ""}>
                <label htmlFor="interestedCourse">Interested Course <span className="required">*</span></label>
                <select 
                    id="interestedCourse" 
                    value={course} 
                    onChange={(e) => setCourse(e.target.value)}
                    required
                >
                    <option value="">-- Select Program --</option>
                    <optgroup label="Undergraduate Programs (3 Years)">
                        <option value="B.A. (General)">Bachelor of Arts (B.A. General)</option>
                        <option value="BBA">Bachelor of Business Administration (BBA)</option>
                        <option value="BCA">Bachelor of Computer Applications (BCA)</option>
                    </optgroup>
                    <optgroup label="Postgraduate Programs (2 Years)">
                        <option value="MBA">MBA (20+ In-Demand Specializations)</option>
                        <option value="MCA">MCA (AI/ML · Cyber Security · Full Stack)</option>
                        <option value="MA (Journalism & Mass Comm)">MA (Journalism & Mass Comm)</option>
                        <option value="MA (English Language Teaching)">MA (English Language Teaching)</option>
                        <option value="M.Com">Master of Commerce (M.Com)</option>
                        <option value="MSW">Master of Social Work (MSW)</option>
                        <option value="M.Sc (Applied Mathematics)">M.Sc (Applied Mathematics)</option>
                    </optgroup>
                    <optgroup label="Diploma & PG Diploma (1 Year)">
                        <option value="Diploma in Digital Marketing">🔥 Diploma in Digital Marketing (Most Demanded)</option>
                        <option value="Diploma in Blockchain Technology">Diploma in Blockchain Technology</option>
                        <option value="Diploma in Business Analytics">Diploma in Business Analytics</option>
                        <option value="Diploma in Financial Services & Portfolio Mgmt">Diploma in Financial Services & Portfolio Mgmt</option>
                        <option value="PG Diploma in Industrial Relations & Personnel Mgmt">PG Diploma in Industrial Relations</option>
                    </optgroup>
                </select>
            </div>

            {isInline ? (
                <div className="form-row">
                    <div className="form-group half-width">
                        <label htmlFor="preferredLanguage">Preferred Language <span className="required">*</span></label>
                        <select 
                            id="preferredLanguage" 
                            value={language} 
                            onChange={(e) => setLanguage(e.target.value)}
                            required
                        >
                            <option value="">-- Select Language --</option>
                            <option value="Telugu">తెలుగు (Telugu)</option>
                            <option value="Kannada">ಕನ್ನಡ (Kannada)</option>
                            <option value="Tamil">தமிழ் (Tamil)</option>
                            <option value="Malayalam">മലയാളം (Malayalam)</option>
                            <option value="Odia">ଓଡ଼ିଆ (Odia)</option>
                            <option value="Hindi">हिन्दी (Hindi)</option>
                            <option value="English">English</option>
                        </select>
                    </div>

                    <div className="form-group half-width">
                        <label htmlFor="studentStatus">Current Status <span className="required">*</span></label>
                        <select 
                            id="studentStatus" 
                            value={status} 
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option value="">-- Select Status --</option>
                            <option value="Student">Student</option>
                            <option value="Working Professional">Working Professional</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
            ) : (
                <>
                    <label htmlFor="preferredLanguage">Preferred Language <span className="required">*</span></label>
                    <select 
                        id="preferredLanguage" 
                        value={language} 
                        onChange={(e) => setLanguage(e.target.value)}
                        required
                    >
                        <option value="">-- Select Language --</option>
                        <option value="Telugu">తెలుగు (Telugu)</option>
                        <option value="Kannada">ಕನ್ನಡ (Kannada)</option>
                        <option value="Tamil">தமிழ் (Tamil)</option>
                        <option value="Malayalam">മലയാളം (Malayalam)</option>
                        <option value="Odia">ଓଡ଼ିଆ (Odia)</option>
                        <option value="Hindi">हिन्दी (Hindi)</option>
                        <option value="English">English</option>
                    </select>

                    <label htmlFor="studentStatus">Are you a Student or Working Professional? <span className="required">*</span></label>
                    <select 
                        id="studentStatus" 
                        value={status} 
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="">-- Select --</option>
                        <option value="Student">Student</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Other">Other</option>
                    </select>
                </>
            )}

            <div className={isInline ? "form-group" : ""}>
                <label htmlFor="bestTime">Best Time to Call <span className="required">*</span></label>
                <select 
                    id="bestTime" 
                    value={bestTime} 
                    onChange={(e) => setBestTime(e.target.value)}
                    required
                >
                    <option value="">-- Select Time Slot --</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    <option value="Night (8 PM - 10 PM)">Night (8 PM - 10 PM)</option>
                    <option value="Anytime">Anytime</option>
                </select>
            </div>

            <div className={isInline ? "form-group" : ""}>
                <label htmlFor="message">Additional Comments / Questions</label>
                <textarea 
                    id="message" 
                    rows={2} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Any specific questions or requirements?"
                />
            </div>

            <button 
                type="submit" 
                className={isInline ? "btn-submit btn-submit-landing" : "btn-submit"} 
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <span className="spinner"></span> Submitting...
                    </>
                ) : (
                    <>
                        <span>Submit Application</span>
                        {isInline && <span className="btn-arrow">➔</span>}
                    </>
                )}
            </button>

            {isInline && (
                <p className="form-security-note">🔒 Your information is 100% confidential and protected.</p>
            )}
        </form>
    );
}
