const nodemailer = require("nodemailer");
async function EmailController(req, resp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "chauhanvansh313@gmail.com",
      pass: "your password",
    },
  });

  const mailOptions = {
    from: req.body.Email,
    to: "chauhanvansh313@gmail.com",
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

async function NewsLetterEmailController(req, resp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "chauhanvansh313@gmail.com",
      pass: "your password",
    },
  });

  const mailOptions = {
    from: "chauhanvansh313@gmail.com",
    to: req.body.Email,
    subject: "CryptoTracker Newsletter",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <div style="text-align: center; padding: 20px; background-color: #f5f5f5;">
          <img src="cid:logoImage" alt="CryptoTracker Logo" style="width: 150px; margin-bottom: 20px;">
          <h2 style="color: #ff6600;">Welcome to CryptoTracker!</h2>
        </div>
        <div style="padding: 20px; border: 1px solid #e0e0e0; border-top: none;">
          <p style="font-size: 16px;">Hello !</p>
          <p>Thank you for reaching out to CryptoTracker!</p>
          <p style="margin-top: 20px;">We appreciate your interest and will get back to you soon. In the meantime, keep tracking the latest trends in cryptocurrency!</p>
          <p style="color: #888; font-size: 14px; margin-top: 30px;">Best regards,<br><strong>CryptoTracker Team</strong></p>
        </div>
      </div>
    `,
    attachments: [
      {
        filename: "cyptotracker",
        path: "C:/Users/ayush/OneDrive/Desktop/CryptoTracker/backend/controller/logo.png",
        cid: "logoImage",
      },
    ],
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

module.exports = { EmailController, NewsLetterEmailController };
