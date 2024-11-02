const nodemailer = require("nodemailer");
async function EmailController(req, resp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your email",
      pass: "your password",
    },
  });

  const mailOptions = {
    from: req.body.Email,
    to: "your email",
    subject: "CryptoTracker",
    text: `
          Name: ${req.body.Name}
          Email: ${req.body.Email}
          Message: ${req.body.Message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: " + error);
      resp.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      resp.status(200).send("Form data sent successfully");
    }
  });
}

module.exports = EmailController;
