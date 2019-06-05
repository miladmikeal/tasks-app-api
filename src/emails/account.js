const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: process.env.EMAIL,
    subject: 'Welcome to the App',
    text: `Welcome ${name}. Let me know how you like the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: process.env.EMAIL,
    subject: 'Account Has Been Deleted',
    text: `Sorry to see you go, ${name}. Feel free to re-register.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}