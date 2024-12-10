const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // upgrade later with STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendActivationMail(first_name, email, activationLink) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `El. pašto adreso patvirtinimas - skygym.lt`,
      text: '',
      html: `
      <div>
        <h1>Norėdami patvirtinti savo el. pašto adresą, paspauskite žemiau pateiktą nuorodą</h1>
        <a href="${activationLink}">${activationLink}</a>
      </div>
      
      `,
    });
  }
}

module.exports = new MailService();
