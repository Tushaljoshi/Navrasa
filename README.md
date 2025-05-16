
# My Project

A full-stack web application backend built with Node.js and Express.js to handle form submissions, send data to Google Forms, and email the submissions via Nodemailer.

## 📁 Project Structure

```
my-project/
├── backend/
│   ├── controllers/
│   │   └── contactController.js
│   ├── server.js
│   ├── package.json
│   └── .env
```

## ⚙️ Features

- Accepts form submissions from frontend
- Sends form data to Google Forms via HTTP POST
- Sends email notifications using Nodemailer

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- Internet access (to post to Google Forms and send email)
- A public Google Form

### Installation

1. Navigate to the `backend` directory:

```bash
cd my-project/backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up your `.env` file:

```dotenv
PORT=5000

# Google Form settings
GOOGLE_FORM_ACTION_URL=https://docs.google.com/forms/d/e/1FAIpQLSfHPc4FA0OrwN_tZIF-pR4FMiRlyZXrNxhtt9f3MiEVKh0FwQ/formResponse
GOOGLE_FORM_FIELDS_NAME=entry.xxxxx
GOOGLE_FORM_FIELDS_EMAIL=entry.yyyyy
GOOGLE_FORM_FIELDS_MESSAGE=entry.zzzzz

# Email (Nodemailer) settings
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
TO_EMAIL=receiver-email@gmail.com
```

> Replace `entry.xxxxx`, etc., with your actual Google Form field IDs.

4. Start the server:

```bash
node server.js
```

## 🔐 Google Form Field IDs

To get the `entry.xxxxx` IDs:
- Open the form in a browser.
- Right-click and inspect each input field.
- Look for `name="entry.xxxxx"` inside the HTML input elements.

## 🛠 API Endpoint

**POST** `/api/contact`

**Payload:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello world!"
}
```

## 🐛 Troubleshooting

- **535 5.7.8 Username and Password not accepted**: Ensure you're using an [App Password](https://support.google.com/accounts/answer/185833?hl=en) if using Gmail.
- **Missing credentials for "PLAIN"**: Check that `EMAIL_USER` and `EMAIL_PASS` are correctly defined in `.env`.

## 📬 Contact

For questions or help, feel free to raise an issue or reach out.
