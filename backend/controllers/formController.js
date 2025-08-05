const Lead = require('../models/Lead');

exports.submitForm = async (req, res) => {
  try {
    console.log('Received form:', req.body);
    const { name, email, phone, course, state } = req.body;

    const lead = new Lead({
      fullName: name,
      email,
      phone,
      course,
      location: state, // 🔥 this maps `state` to `location` field in DB
    });

    await lead.save();
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting form', error });
  }
};
