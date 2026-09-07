// ====== MODAL CONTROLS ======
const openModalBtn = document.getElementById('openModalBtn');
const applicationModal = document.getElementById('applicationModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const successModal = document.getElementById('successModal');
const closeSuccessBtn = document.getElementById('closeSuccessBtn');
const closeSuccessBtn2 = document.getElementById('closeSuccessBtn2');

function openModal() {
    applicationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    applicationModal.classList.remove('active');
    document.body.style.overflow = '';
}

function openSuccessModal() {
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset form
    document.getElementById('applicationForm').reset();
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
closeSuccessBtn.addEventListener('click', closeSuccessModal);
closeSuccessBtn2.addEventListener('click', closeSuccessModal);

// Close modal on overlay click
applicationModal.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
successModal.addEventListener('click', function(e) {
    if (e.target === this) closeSuccessModal();
});

// ====== FORM SUBMISSION ======
const form = document.getElementById('applicationForm');
const submitBtn = document.getElementById('submitBtn');

// === IMPORTANT: Replace this URL with your Google Apps Script Web App URL ===
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxuXVcyxo_ijgXeT8XXlHgXzOhR4WlRm3lnRvmiNPSfgmcGtqJPjBlRR9K7rECom4VwQ/exec';

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Validate required fields
    const name = document.getElementById('studentName').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    const course = document.getElementById('interestedCourse').value;
    const lang = document.getElementById('preferredLanguage').value;

    if (!name || !phone || !course || !lang) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }

    // Phone number validation (10 digits)
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Submitting...';

    // Collect form data
    const formData = {
        studentName: name,
        phoneNumber: phone,
        interestedCourse: course,
        preferredLanguage: lang,
        message: document.getElementById('message').value.trim(),
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Close application modal
        closeModal();

        // Show success modal after a short delay
        setTimeout(() => {
            openSuccessModal();
        }, 300);

    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again or contact us directly.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit Application';
    }
});