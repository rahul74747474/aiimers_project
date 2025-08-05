// routes/otp.js
const express = require('express');
const router = express.Router();
const sendOTPEmail = require('../utils/sendEmail');

const otps = new Map(); // In-memory OTP storage (use DB or Redis in prod)

router.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: 'Email is required' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  otps.set(email, { otp, expires: Date.now() + 10 * 60 * 1000 }); // 10 min expiry

  try {
    await sendOTPEmail(email, otp);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send OTP' });
  }
});

router.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  const record = otps.get(email);
  if (!record) return res.status(400).json({ message: 'No OTP sent' });

  if (Date.now() > record.expires) {
    otps.delete(email);
    return res.status(400).json({ message: 'OTP expired' });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  otps.delete(email);
  return res.status(200).json({ message: 'OTP verified successfully' });
});

module.exports = router;
