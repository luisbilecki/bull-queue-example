require('dotenv').config();

const { sendEmail } = require('./mailer');

sendEmail({ to: 'myemail@provider.com', subject: 'hi', text: 'hi' });
