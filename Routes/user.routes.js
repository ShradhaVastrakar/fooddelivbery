const express = require("express");
const { User } = require("../Models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRouter = express.Router();


userRouter.get("/register", async (req,res) => {
    const user = await User.find()
    res.send(user);
})

userRouter.post("/register", async (req, res) => {
    try {
        const { name, email, password, address } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, address });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ message: "Failed to register user" })
    }
})

userRouter.post("/login", async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
        res.status(201).json({ token });
      } catch (error) {
        res.status(500).json({ message: 'Failed to login' });
      }
})

userRouter.put("/user/:id/reset", async (req,res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const user = await User.findById(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid current password' });
        }
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;
        await user.save();
         res.status(204).json({message: "Successfully changed the password"});
      } catch (error) {
        res.status(500).json({ message: 'Failed to reset password' });
      }
})


module.exports = {
    userRouter
}