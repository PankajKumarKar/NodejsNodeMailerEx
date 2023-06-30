const nodemailer = require("nodemailer");

exports.nodeMailerFun = async (doc) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST_NAME,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: "Learn NodeMailer", // sender address
      to: doc.email, // list of receivers
      subject: "Hello ✔", // Subject line
      html: `<b>Hello world?</b> email:${doc.email}`, // html body
    });
  } catch (error) {
    console.log(error);
  }
};
