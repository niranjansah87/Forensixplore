const nodemailer = require("nodemailer");

// Function to send signup confirmation email
const sendSignupEmail = async (email, name, ID_NO) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: 'gmail',
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: "Forensixplore Team <sahn0075@gmail.com>",
      to: email,
      subject: "Welcome to Forensixplore Club As Admin",
      text: `Your Account is successfully created with \n\n Name: ${name}\n ID NO: ${ID_NO}\n\nThank you for joining us!\n\nBest Regards\n-Team Forensixplore`,
    });

    console.log("Signup confirmation email sent successfully");
  } catch (error) {
    console.error("Error sending signup confirmation email:", error);
    throw error;
  }
};

module.exports = sendSignupEmail;
