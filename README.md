# Queue with Bull in Node.js

This repository contains an example of pratical use of the [Bull queue management system](https://github.com/OptimalBits/bull).

## Getting Started

### Prerequisites

This app is not Docker based, so you should install Node.js.

Node.js >= 10.x

Bull needs the [Redis](https://redis.io/) service to store and manage its jobs and messages. So, we can easily install Redis using Docker:
```bash
    docker run --name my_redis_container -d -p 6379:6379 -i -t redis:alpine
```

We're using [`nodemailer`](https://nodemailer.com/about/) as a library to send mail messages. `Nodemailer` supports several types of SMTP transport, like
[Ethereal](https://ethereal.email/) (for testing purposes). To receive the Ethereal access credentials, please follow the steps below:

1. Access the Ethereal Website: (https://ethereal.email/);
2. Click in "Create Ethereal Account";
3. Add your email username and password to `.env` file:

```bash
EMAIL_USERNAME=<YOUR_EMAIL_USERNAME_HERE>
EMAIL_PASSWORD=<YOUR_PASSWORD_HERE>
```

4. Access this link (https://ethereal.email/messages) to open your mailbox.

### How to run

1. Install the project dependencies using `yarn`.
```bash
    yarn install
```

2. Run the provided example using
```bash
    node src/index.js
```
OR
```bash
    yarn start
```

### Bonus

This examples comes with [Arena](https://github.com/bee-queue/arena) installed, an interactive Web GUI for Bee Queue and Bull. With Arena we can view the queues, start/stop jobs, perform job retry, and more.

## Further improvements

