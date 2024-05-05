const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: 587,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            text: `Subject: ${subject}\n\nDear User,\n\nYou have requested to reset your password. Please click on the following link to reset your password:\n\n[Reset Password](http://example.com/reset-password)\n\nIf you did not request this password reset, please ignore this email.\n\nThank you,\nForensixplore Team`,
        });

        console.log("email sent successfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;
