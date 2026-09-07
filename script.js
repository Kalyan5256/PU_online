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
    document.getElementById('applicationForm').reset();
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
closeSuccessBtn.addEventListener('click', closeSuccessModal);
closeSuccessBtn2.addEventListener('click', closeSuccessModal);

applicationModal.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
successModal.addEventListener('click', function(e) {
    if (e.target === this) closeSuccessModal();
});

// ====== FORM SUBMISSION ======
const form = document.getElementById('applicationForm');
const submitBtn = document.getElementById('submitBtn');

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzM770XQRxc2QHoJTolOKDRvDhFHBlFso657QeqLo8tIqj2pjyxMP4MZDkGUz6DcBca/exec';

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('studentName').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    const course = document.getElementById('interestedCourse').value;
    const lang = document.getElementById('preferredLanguage').value;
    const status = document.getElementById('studentStatus').value;
    const bestTime = document.getElementById('bestTime').value;

    if (!name || !phone || !course || !lang || !status || !bestTime) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Submitting...';

    const formData = {
        studentName: name,
        phoneNumber: phone,
        interestedCourse: course,
        preferredLanguage: lang,
        studentStatus: status,
        bestTimeToCall: bestTime,
        message: document.getElementById('message').value.trim(),
        timestamp: new Date().toISOString()
    };

    try {
        // ✅ Using 'no-cors' mode - this sends the data but you can't read the response
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',  // ← This prevents CORS error
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Since we can't check the response with 'no-cors', assume success
        closeModal();
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