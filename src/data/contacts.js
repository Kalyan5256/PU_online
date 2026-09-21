const parseContactNumber = (envValue, defaultPhone, defaultTel) => {
    if (!envValue) {
        return { phone: defaultPhone, tel: defaultTel };
    }
    const val = envValue.trim();
    const digits = val.replace(/\D/g, '');

    // Determine tel for href="tel:..."
    let tel = defaultTel;
    if (digits.length === 10) {
        tel = `+91${digits}`;
    } else if (digits.length === 12 && digits.startsWith('91')) {
        tel = `+${digits}`;
    } else if (digits.length > 0) {
        tel = val.startsWith('+') ? `+${digits}` : `+91${digits}`;
    }

    // Determine phone for display
    let phone = val;
    if (/^\d{10}$/.test(val)) {
        phone = `+91 ${val.slice(0, 6)} ${val.slice(6)}`;
    } else if (/^91\d{10}$/.test(val)) {
        phone = `+91 ${val.slice(2, 8)} ${val.slice(8)}`;
    } else if (!val.startsWith('+')) {
        phone = `+91 ${val}`;
    }

    return { phone, tel };
};

export const contactHelplines = [
    { 
        lang: "తెలుగు", 
        label: "Telugu", 
        ...parseContactNumber(import.meta.env?.VITE_HELPLINE_TELUGU, "+91 8886681082", "+918886681082") 
    },
    { 
        lang: "ಕನ್ನಡ", 
        label: "Kannada", 
        ...parseContactNumber(import.meta.env?.VITE_HELPLINE_KANNADA, "+91 73962 18440", "+917396218440") 
    },
    { 
        lang: "தமிழ்", 
        label: "Tamil", 
        ...parseContactNumber(import.meta.env?.VITE_HELPLINE_TAMIL, "+91 90597 98467", "+919059798467") 
    },
    { 
        lang: "മലയാളം", 
        label: "Malayalam", 
        ...parseContactNumber(import.meta.env?.VITE_HELPLINE_MALAYALAM, "+91 89439 09536", "+918943909536") 
    },
    { 
        lang: "ଓଡ଼ିଆ", 
        label: "Odia", 
        ...parseContactNumber(import.meta.env?.VITE_HELPLINE_ODIA, "+91 93920 54870", "+919392054870") 
    },
    { 
        lang: "हिन्दी", 
        label: "Hindi", 
        ...parseContactNumber(import.meta.env?.VITE_HELPLINE_HINDI, "+91 88976 72226", "+918897672226") 
    },
    { 
        lang: "English", 
        label: "English", 
        ...parseContactNumber(import.meta.env?.VITE_HELPLINE_ENGLISH, "+91 903200 2145", "+919032002145") 
    }
];

