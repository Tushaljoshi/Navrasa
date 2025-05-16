// backend/utils/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (name, phone, email, company, service, details) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  try {
    await transporter.sendMail({
      from: process.env.COMPANY_EMAIL,
      to: process.env.COMPANY_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nDetails: ${details}`,
    });
    console.log('Email sent successfully');
  } catch (emailErr) {
    console.error('Email sending failed:', emailErr);
    throw emailErr; // Rethrow so it gets caught in controller
  }
};

module.exports = sendEmail;