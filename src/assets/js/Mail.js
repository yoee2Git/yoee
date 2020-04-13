const nodemailer = require("nodemailer");

const sendMail = async function Mail() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "381945650@qq.com", // generated ethereal user
      pass: "aadwkrdagnaxcace" // generated ethereal password
    }
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: "381945650@qq.com", // sender address
    to: "yoeex@outlook.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?He杨一?Hello world?" // plain text body
  });
};

// sendMail().catch(console.error);
module.exports = sendMail