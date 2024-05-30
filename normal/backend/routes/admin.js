const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const fetchuser = require("../middleware/fetchuser.js");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const sendSignupEmail = require("../utils/sendSignupEmail");
const generateOtp = require("../utils/generateOTP.js");
require('dotenv').config({ path: './.env' });

const JWT_SECRET = process.env.JWT_SECRET;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

//Route 1: Create a User using POST "api/auth/signup". No login required
router.post(
  "/signup",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("ID_NO", "Enter a valid ID Number").isLength({ min: 10 }),
    body("email", "Enter a valid email").isLength({ min: 3 }),
    body("contact", "Enter a valid contact").isLength({ min: 10 }),
    body("password", "Enter a password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ error: "Validation error. Please check your input." });
      }

      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email already exists." });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        name: req.body.name,
        ID_NO: req.body.ID_NO,
        email: req.body.email,
        contact: req.body.contact,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(authToken);
      // Send signup confirmation email with OTP
      await sendSignupEmail(req.body.email, req.body.name, req.body.ID_NO);
      res.json({ message: "Signup confirmation email sent successfully", authToken });
    } catch (error) {
      console.error(error);
      res.status(500).send("Some error occurred");
    }
  }
);







// router.post(
//   "/signup",
//   [
//     body("name", "Enter a valid name").isLength({ min: 3 }),
//     body("ID_NO", "Enter a valid ID Number").isLength({ min: 10 }),
//     body("email", "Enter a valid email").isEmail(),
//     body("contact", "Enter a valid contact").isLength({ min: 10 }),
//     body("password", "Enter a password").isLength({ min: 6 }),
//   ],
//   async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       let user = await User.findOne({ email: req.body.email });
//       if (user) {
//         return res
//           .status(400)
//           .json({ error: "Sorry, a user with this email already exists." });
//       }

//       // Generate and store OTP
//       const otp = generateOtp();

//       const salt = await bcrypt.genSalt(10);
//       const secPass = await bcrypt.hash(req.body.password, salt);

//       // Create a new user
//       user = await User.create({
//         name: req.body.name,
//         ID_NO: req.body.ID_NO,
//         email: req.body.email,
//         contact: req.body.contact,
//         password: secPass,
//         otp: otp, // Store OTP in the user object
//       });

//       // Send signup confirmation email with OTP
//       await sendSignupEmail(req.body.email, otp);

//       const data = {
//         user: {
//           id: user.id,
//         },
//       };

//       const authToken = jwt.sign(data, process.env.JWT_SECRET);
//       res.json({ authToken });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Some error occurred");
//     }
//   }
// );


//Route 2: Verify OTP using POST "api/auth/verify-otp". No login required
router.post(
  "/verify-otp",
  [
    body("email", "Email is required").isEmail(),
    body("otp", "OTP is required").notEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, otp } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Check if the provided OTP matches the hashed OTP stored in the user object
      const otpMatch = await bcrypt.compare(otp, user.otp);
      if (!otpMatch) {
        return res.status(401).json({ error: "Invalid OTP" });
      }

      // Update user as verified
      user.verified = true;
      await user.save();

      // Generate JWT token for user
      const payload = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(payload, process.env.JWT_SECRET);

      res.json({ message: "OTP verified successfully", authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


// Route 2: Authenticate a User using POST "api/auth/login". No login required
router.post(
  "/login",
  [
    body("ID_NO", "Enter a valid ID Number").isLength({ min: 10 }),
    body("password", "Enter a password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { ID_NO, password } = req.body;
      let user = await User.findOne({ ID_NO });

      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET, {
        expiresIn: '1h', // Token expiration time
      });
      console.log(authToken);
      res.json({ authToken });
    } catch (error) {
      console.error(error);
      res.status(500).send("Some error occurred");
    }
  }
);


//Route 3:Log out a User using GET "api/auth/logout". Login required
router.post("/logout", (req, res) => {
  res.clearCookie("authToken"); // Clear the authentication token cookie
  res.json({ message: "Logged out successfully" });
});
//Route 4: Fetch the all user details using GET "api/auth/getuser". Login required
router.get("/getuser", fetchuser, async (req, res) => {
  try {
    const admins = await User.find();
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});



//Route 5: Check whether user is logged in or not using GET "admin/checklogin". No login required
router.get("/checklogin", fetchuser, (req, res) => {
  try {
    res.status(200).json({ isLoggedIn: true, user: req.user, message: "User logged in" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ isLoggedIn: false, error: "Internal Server Error" });
  }
});

//Route 6: ForgotPassword using POST "api/auth/forgotpassword". No login required
router.post("/forgotpassword", async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "User with this email does not exist." });
    } else {
      const secret = JWT_SECRET + user.password;
      const token = jwt.sign({ email: user.email, id: user.id }, secret, { expiresIn: "30m" });
      const link = `http://localhost:5000/admin/resetpassword/${user.id}/${token}`;
      console.log(link);
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS
        }
      });

      var mailOptions = {
        from: "Forensixplore Team <sahn0075@gmail.com>",
        to: user.email,
        subject: 'Forensixplore Reset Password',
        text: `Subject: Forensixplore Reset Password \n\nDear User,\n\nYou have requested to reset your password. Please click on the following link to reset your password:\n\n[Reset Password](${link}) \n\nIf you did not request this password reset, please ignore this email.\n\nThank you,\nForensixplore Team`
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.send("Password reset link sent to your email account");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
});


//Route 7: Reset Password using GET "/api/auth/resetpassword/:id/:token". No login required
router.get('/resetpassword/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(400).json({ error: 'User with this email does not exist' });
  }
  const secret = JWT_SECRET + user.password;
  try {
    const payload = jwt.verify(token, secret);
    res.render('index', { email: payload.email });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Token expired. Please try again' });
  }
});

//Route 8: Reset Password using POST "/api/auth/resetpassword/:id/:token". No login required
router.post('/resetpassword/:id/:token', async (req, res) => {

  const { id, token } = req.params;
  const password = req.body.password;

  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(400).json({ error: 'User with this email does not exist' });
  } else {
    const secret = JWT_SECRET + user.password;
    try {
      if (!password) {
        return res.status(400).json({ error: 'Password cannot be empty' });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        return res.status(400).json({ error: 'New password cannot be the same as the old password' });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await User.updateOne(
          {
            _id: id
          }, {
          $set: {
            password: hashedPassword
          }
        });
        res.json({ message: 'Password reset successful' });
      }
    } catch (error) {
      console.error(error);
      res.status(401).json({ error: 'Token expired. Please try again' });

    }

  }

});




module.exports = router;
