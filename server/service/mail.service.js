const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: 'username',
        pass: 'password',
      },
    });
  }

  async sendActivationMail(first_name, email) {}
}

module.exports = new MailService();
