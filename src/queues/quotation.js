const Queue = require('bull');
const quotationJob = require('../jobs/quotation');

const quotationQueue = new Queue('quotationQueue', process.env.REDIS_URL);

quotationQueue.process(quotationJob);

module.exports = quotationQueue;
