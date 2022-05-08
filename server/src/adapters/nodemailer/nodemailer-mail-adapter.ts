import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "70e451b39ce642",
      pass: "346dfcd632ac06"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
    // Como o projeto é um projeto não oficial,entao coloquei emails fakes
    // Em projetos reais teriamos que colocar emails true
    await transport.sendMail({
     from: 'Equipe Feedget <oi@feedget.com>',
     to: 'Rafael Canedo <rafatest@gmail.com>',
     subject,
     html: body,
    });
    };
}

/*
  html: [
         `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
         `<p>Tipo do feedback: ${type}</p>`,
         `<p>Tipo do feedback: ${comment}</p>`,
         `</div>`
     ].join('\n')
*/