const mongoose = require('mongoose');
const SuccessStory = require('../models/testimonials');
const { default: testimonials } = require('../models/testimonials');

mongoose.connect('mongodb+srv://aiimers:123aiimer123@cluster0.6yfcfsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected!');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

   const data = [
    {
      name: "Priya Sharma",
      course: "MBBS at DY Patil",
      image: "👩‍⚕️",
      quote: "AIIMERS helped me get MBBS seat in DY Patil. Their guidance was exceptional and the process was completely transparent."
    },
    {
      name: "Rahul Patel",
      course: "BTech at MIT-WPU",
      image: "👨‍💻",
      quote: "Got direct admission in Computer Science at MIT-WPU through AIIMERS. Best decision of my life!"
    },
    {
      name: "Sneha Reddy",
      course: "MBA at Symbiosis",
      image: "👩‍💼",
      quote: "AIIMERS made my MBA admission journey smooth. Now I'm studying at Symbiosis International University."
    }
  ];

async function seed() {
  try {
    await testimonials.deleteMany(); // ❗ error was happening here due to no connection
    await testimonials.insertMany(data);
    console.log('✅ Success stories seeded!');
  } catch (err) {
    console.error('❌ Error seeding:', err);
  } finally {
    mongoose.disconnect();
  }
}

seed();
