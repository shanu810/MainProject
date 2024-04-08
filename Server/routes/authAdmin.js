const express=require('express');
const jwt=require('jsonwebtoken')
const router=express.Router();
const bcrypt=require('bcrypt');
const Admin=require('../models/admin')
const User =require('../models/user')

// Admin can do block
router.put('/block/:id', async (req, res) => {
    const id = req.params.id;
    try {
        let blockUser = await User.findById(id);
        if (!blockUser) {
            return res.status(400).json({ msg: "Not found" });
        }
        blockUser = await User.findByIdAndUpdate(id, { blocked: !(blockUser.blocked) }, { new: true })

        res.status(200).json({ msg: (blockUser.blocked) ? "userblocked" : "userunblocked" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error occurred while blocking the user" });
    }
})

  //delete user
  router.delete("/deleteuser/:id", async (req, res) => {
    const userDelete = req.params.id;
    console.log(req.params.id);
    if (!userDelete) {
      return res.status(400).json({ message: "no ID provided" });
    }
    const deleteUser = await User.findOneAndDelete({ _id: userDelete });
    if (!deleteUser) {
      return res.status(400).json({ message: "No user with that Id!" });
    }
    res.json({ message: "User removed" });
  });

    //get all users
  router.get("/allusers", async (req, res) => {
  try {
    // Finding all user in the database
    const users = await User.find();

    // Sending a success response with the found users
    return res.status(200).json(users);
  } catch (error) {
    // Logging the error
    console.error(error);

    // Sending an error response
    return res.status(500).json({ message: "Error retrieving users" });
  }
});

router.post('/admin', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // console.log(req.body);

        // Check if all required fields are provided
        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if the email is already registered
        const existingUser = await Admin.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new Admin({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/Adminlogin", async (req, res) => {
    // get data from body
    try {
      const { email, password } = req.body;
        console.log(req.body);
      // find the user by their email
      const admin = await Admin.findOne({ email });
      console.log(admin);
      if (!admin) {
        return res.status(400).json({ error: "User not found" });
      }
      // compare the incoming password to the stored one
      const validPass = await bcrypt.compare(password, admin.password);
      console.log(validPass);
      if (!validPass) {
        return res.status(400).json({ error: "Invalid password" });
      }
    //   if (user.blocked) {
    //     return res.status(400).json({ error: "user blocked" });
    //   }
      // create and send token
      const token = jwt.sign({ adminId: admin._id }, "secretkey", {
        expiresIn: "1hr",
      });
      res.status(200).json({ token });
      console.log(token);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "login failed" });
    }
  });

module.exports=router