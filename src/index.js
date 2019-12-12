require('dotenv').config();

// Mail queue 
const { sendMailQueue } = require('./queues/');

// Data for email job
const mailData = {
    userEmail: '<USER_EMAIL_HERE>',
    subject: 'Subject here',
    body: 'Hello!',
};

// Wait 5 seconds before process and try to run 3 times
const jobOptions = {
    delay: 5000,
    attempts: 3,
};

// Add email send job to queue
sendMailQueue.add(mailData, jobOptions);

