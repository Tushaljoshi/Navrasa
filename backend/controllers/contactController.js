// backend/controllers/contactController.js
const axios = require('axios');
const sendEmail = require('../utils/sendEmail');

exports.submitContactForm = async (req, res) => {
  const { name, email, phone, company, service, details } = req.body;
  const googleFormUrl = process.env.GOOGLE_FORM_URL; // should end with formResponse
  const entryName = process.env.GOOGLE_ENTRY_NAME;
  const entryEmail = process.env.GOOGLE_ENTRY_EMAIL;
  const entryPhone = process.env.GOOGLE_ENTRY_PHONE;
  const entryCompany = process.env.GOOGLE_ENTRY_COMPANY;
  const entryService = process.env.GOOGLE_ENTRY_SERVICE;
  const entryDetails = process.env.GOOGLE_ENTRY_DETAILS;

  const formData = new URLSearchParams();
  formData.append(entryName, name);
  formData.append(entryEmail, email);
  formData.append(entryPhone, phone);
  formData.append(entryCompany, company);
  formData.append(entryService, service);
  formData.append(entryDetails, details);

  try {
    await axios.post(googleFormUrl, formData);
    await sendEmail(name, phone, email, company, service, details);
    res.status(200).json({ message: 'Submission successful' });
  } catch (error) {
    console.error('Submission error:', error.message, error.response?.data);
    res.status(500).json({ message: 'Submission failed', error: error.message });
  }
  
};
