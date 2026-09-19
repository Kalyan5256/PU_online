const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzM770XQRxc2QHoJTolOKDRvDhFHBlFso657QeqLo8tIqj2pjyxMP4MZDkGUz6DcBca/exec';

/**
 * Submit lead application data to Google Apps Script webhook
 * @param {Object} formData 
 * @returns {Promise<boolean>}
 */
export async function submitApplication(formData) {
    const payload = {
        ...formData,
        timestamp: new Date().toISOString()
    };

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        return true;
    } catch (error) {
        console.error('API submission error:', error);
        throw error;
    }
}
