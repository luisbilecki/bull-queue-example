const { sendMail } = require('../mailer/index');

module.exports = async(job) => {
    // Extract data from job
    const { userEmail, subject, body } = job.data;

    if (!userEmail || !subject || !body) {
        return Promise.reject(new Error('Missing params of job'));
    }

    try {
        const mailResult = await sendMail({ to: userEmail, subject: subject, text: body });
        return Promise.resolve({ sent: true, messageId: mailResult.messageId });
    } catch(err) {
        return Promise.reject(err);
    }
};
