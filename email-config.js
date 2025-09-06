// Email Configuration for Adopt The Ayurveda
// Choose one of the following methods:

// METHOD 1: EmailJS Configuration
// 1. Go to https://www.emailjs.com/
// 2. Create account and get your credentials
// 3. Replace the values below:

const EMAILJS_CONFIG = {
    USER_ID: "YOUR_USER_ID",           // Get from EmailJS dashboard
    SERVICE_ID: "YOUR_SERVICE_ID",     // Get from Email Services
    TEMPLATE_ID: "YOUR_TEMPLATE_ID",   // Get from Email Templates
    TO_EMAIL: "aditya.rustagi54@gmail.com"
};

// METHOD 2: Formspree Configuration (RECOMMENDED - Easiest Setup)
// 1. Go to https://formspree.io/
// 2. Create account and get form endpoint
// 3. Replace the value below:

const FORMSPREE_CONFIG = {
    ENDPOINT: "https://formspree.io/f/YOUR_FORM_ID", // Get from Formspree dashboard
    TO_EMAIL: "aditya.rustagi54@gmail.com"
};

// Quick Formspree Setup Instructions:
// 1. Go to https://formspree.io/forms/new
// 2. Enter your email: aditya.rustagi54@gmail.com
// 3. Click "Create Form"
// 4. Copy the form endpoint (looks like: https://formspree.io/f/xpzgkqyz)
// 5. Replace "YOUR_FORM_ID" in the ENDPOINT above
// 6. Change ACTIVE_EMAIL_METHOD to 'formspree'

// METHOD 3: Netlify Forms (if hosting on Netlify)
// Just add netlify attribute to your form - no configuration needed

// Current active method (change to 'emailjs', 'formspree', or 'netlify')
const ACTIVE_EMAIL_METHOD = 'fallback'; // 'emailjs', 'formspree', 'netlify', or 'fallback'

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EMAILJS_CONFIG, FORMSPREE_CONFIG, ACTIVE_EMAIL_METHOD };
}
