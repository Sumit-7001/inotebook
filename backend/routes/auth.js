const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');

router.post(
  '/',
  [
    body('name', 'Name must be at least 3 characters').isLength({ min: 3 }),
    body('mail', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
  ],

  async (req, res) => {
    // 🔴 validation error check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      console.log(req.body);

      const { name, mail, password } = req.body;

      // 🔍 duplicate user check
      let user = await User.findOne({ mail });
      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }

      user = new User({
        name,
        mail,
        password
      });

      await user.save();

      res.json({
        success: true,
        message: "User created successfully"
      });

    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
