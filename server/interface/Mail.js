const nodemailer = require("nodemailer");
const Router = require('koa-router');

let router = new Router({
  prefix: '/about'
})

router.post('/sendEmail', async (ctx) => {
  ctx.body = {
    code: 0,
    msg: '已收到您的邮件!',
    title:title,
    email:email,
    desc:desc
  }
  var { title, email, desc } = ctx.request.body;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "381945650@qq.com", // generated ethereal user
      pass: "fttbotdisattbhhc" // generated ethereal password
    }
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: "381945650@qq.com", // sender address
    to: "381945650@qq.com", // list of receivers
    // subject: ctx.request.body.title, // Subject line
    subject: title,
    // text: ctx.request.body.text // plain text body
    text: `${email}

    对我说:
    =--------->

    ${desc}`
  });
  // console.log(title)
});

module.exports = router