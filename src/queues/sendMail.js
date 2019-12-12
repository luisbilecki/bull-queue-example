const Queue = require('bull');
const sendMailJob = require('../jobs/sendMail');

// Create mail queue
const sendMailQueue = new Queue('sendMailQueue', process.env.REDIS_URL);

// Add function to process send mail job queue
sendMailQueue.process(sendMailJob);

module.exports = sendMailQueue;
