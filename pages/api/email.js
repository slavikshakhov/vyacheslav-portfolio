// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');


export default async (req, res) => {
  // create reusable transporter object using the default SMTP transport
  const {name, email, subject, message} = req.body
  

  
  let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    //host: 'vyacheslav-portfolio-avuoeqv2b.vercel.app',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PW, // generated ethereal password
    }
  }));

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: email,
    //from: `${name}, <${email}>`,
   
    to: process.env.EMAIL, // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
    //html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
}
