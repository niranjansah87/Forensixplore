const nodemailer = require("nodemailer");

// Function to send signup confirmation email
const sendSignupEmail = async (email, name, ID_NO) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      service: 'gmail',
      port: 587,
      secure: true,
      auth: {
        user: 'sahn0075@gmail.com',
        pass: 'mxbp cawe hctu pwzm',
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
