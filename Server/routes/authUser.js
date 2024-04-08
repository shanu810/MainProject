const express=require('express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const router=express.Router();
const User=require('../models/user');
const sendEmail = require('../nodeMailer/sendEmail')

// register user
router.post('/register', async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        // console.log(req.body);

        // Check if all required fields are provided
        if (!username || !email || !phone || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, email, phone, password: hashedPassword });
        await newUser.save();

        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});



router.post("/login", async (req, res) => {
    // get data from body
    try {
      const { email, password } = req.body;
  
      // find the user by their email
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }
      // compare the incoming password to the stored one
      const validPass = await bcrypt.compare(password, user.password);
      if (!validPass) {
        return res.status(400).json({ error: "Invalid password" });
      }
      if (user.blocked) {
        return res.status(400).json({ error: "user blocked" });
      }
      // create and send token
      const token = jwt.sign({ userId: user._id }, "secretkey", {
        expiresIn: "1hr",
      });
      res.status(200).json({ token });
      console.log(token);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "login failed" });
    }
  });


  //forgot password
router.post("/forgotpassword", async (req, res) => {
    try {
      // Extract the email from the request body
      const { email } = req.body;
      // Find the user with the given email
      const user = await User.findOne({ email });
      // If user is not found, return an error
      if (!user) {
        return res.status(401).json({ error: "user not found" });
      }
      // Generate a random OTP
      const otp = Math.floor(Math.random() * 100000);
      // Update the user's OTP in the database
      const updateOtp = await User.findByIdAndUpdate(
        user._id,
        { otp: otp },
        { new: true }
      );
      // If the OTP is successfully updated, send an email to the user with the OTP
      if (updateOtp) {
        sendEmail(user.email, otp);
        const emailToken = jwt.sign({ emailId: email }, "secretkey", {
          expiresIn: "1hr",
        });
        res.status(200).json({ message: "OTP sent to mail", emailToken });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed" });
    }
  });
  
  
  //otp verification and update password
  router.post("/verification", async (req, res) => {
    try {
      const { otp, emailToken, password } = req.body;
      console.log(req.body);
      // Verify the JWT token using the secret key
      const decoded = jwt.verify(emailToken, "secretkey");
      // Extract the email from the decoded token
      const email = decoded.emailId;
      const user = await User.findOne({ email });
      console.log(user);
      if (user.otp == otp) {
        const newPassword = await bcrypt.hash(password, 10);
        // Extract the user ID from the user object
        const userId = user._id;
        // Update the user's password and clear the OTP field
        const updatedPassword = await User.findByIdAndUpdate(
          userId,
          { password: newPassword, otp: "" },
          { new: true }
        );
        // Check if the password was successfully updated
        if (updatedPassword) {
          return res.status(201).json({ message: "Password updated" });
        }
      }
      res.status(500).json({ error: "error" });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "error" });
    }
  });

  
  //user profile
router.get("/userprofile/:token", async (req, res) => {
  try {
    const {token} = req.params;
    console.log(token);
    
    const decoded=jwt.verify(token,'secretkey')
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Return user profile data
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

//edituser
router.put('/editProfile/:token', async (req, res) => {
  try {
    const { token } = req.params;
    const userDetails = req.body;

    const decoded = jwt.verify(token, 'secretkey');
    const userU = await User.findByIdAndUpdate(decoded.userId, { $set: userDetails }, { new: true });
    res.status(200).json(userU);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

//update a user
router.put('/userupdate/:id', async (req ,res) =>{
  const userId = req.params.id;
  const updateField = req.body;

  if (!userId || !updateField ) {
      return res.status(400).json ({ msg : 'Missing fields' });
  }      

  let foundUser = await User.findById(userId)
  if (!foundUser) {
      return res.status(400).json ({ msg : 'No such User in the database.' });
  }

  const updatedUser = await User.findByIdAndUpdate(userId, { $set : updateField }, { new: true} );
  res.json(updatedUser);
});

module.exports=router


//make login route before 8/3/2024
// check already existing user by checking whether the email exists in the DB ? if user exists return res.status(409,{message:"Already existig user"}) else 

