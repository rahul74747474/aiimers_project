const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoutes');
const collegeRoutes = require('./routes/collegeroute');
const successStoryRoutes = require('./routes/successStoryRoute');
const otpRoutes = require('./routes/otp');
// const otpRoutes = require('./routes/otp.route');


dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: "https://totals-brooks-timber-river.trycloudflare.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use('/api/form', formRoutes);
app.use('/api/colleges', collegeRoutes);

app.use('/api/success-stories', successStoryRoutes);
app.use('/api', require('./routes/youtubeRoute'));
app.use('/api/testimonials', require('./routes/testimonialRoute'));
app.use('/api/otp', otpRoutes);
// app.use('/api/otp', require('./routes/otp.route'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
