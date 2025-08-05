import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  Users,
  Award,
  Shield,
  Clock,
  Star,
  ArrowRight,
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type Testimonial = {
  _id: string;
  name: string;
  course: string;
  quote: string;
image?: {
    public_id: string;
    url: string;
  };
};
type College = {
  _id: string;
  name: string;
  location: string;
  courses: string;
  grade: string;
  logo: string;
};

const Home: React.FC = () => {
  const [colleges, setColleges] = useState<College[]>([]); // ✅ Correctly inside the component
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [counters, setCounters] = useState({
    students: 0,
    success: 0,
    colleges: 0
  });

  // useEffect for testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/testimonials`);
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
      }
    };
    fetchTestimonials();
  }, []);

  // useEffect for colleges
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/colleges`);
        const data = await res.json();
        setColleges(data);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };
    fetchColleges();
  }, []);

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const targets = { students: 10000, success: 95, colleges: 150 };
      const duration = 2000;
      const steps = 60;
      const increment = {
        students: targets.students / steps,
        success: targets.success / steps,
        colleges: targets.colleges / steps
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounters({
          students: Math.min(Math.floor(increment.students * step), targets.students),
          success: Math.min(Math.floor(increment.success * step), targets.success),
          colleges: Math.min(Math.floor(increment.colleges * step), targets.colleges)
        });

        if (step >= steps) clearInterval(timer);
      }, duration / steps);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });

    const counterElement = document.getElementById('counter-section');
    if (counterElement) observer.observe(counterElement);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Get Direct Admission in India's 
                  <span className="text-yellow-400"> Top Semi-Govt Colleges</span> 
                  with AIIMERS
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Trusted by 10,000+ students | 95% Success Rate
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 text-center"
                >
                  Free Counselling Form
                </Link>
                <Link 
                  to="/colleges" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 text-center"
                >
                  Explore Colleges
                </Link>
              </div>

              {/* Counter Animation */}
              <div id="counter-section" className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{counters.students.toLocaleString()}+</div>
                  <div className="text-blue-200">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{counters.success}%</div>
                  <div className="text-blue-200">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{counters.colleges}+</div>
                  <div className="text-blue-200">Colleges</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">🎓 Student Success</h3>
                  <p className="text-blue-200">Join thousands of successful students</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                    <span>MBBS Admissions</span>
                    <span className="font-bold">2,500+</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                    <span>BTech Admissions</span>
                    <span className="font-bold">5,000+</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                    <span>MBA Admissions</span>
                    <span className="font-bold">2,500+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AIIMERS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why 1000+ Students Choose Us ?
            </h2>
            <p className="text-xl text-gray-600">
              Trusted expertise with proven results across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">10+ Years of Experience</h3>
              <p className="text-gray-600">
                Decade-long expertise in admission consultancy with deep industry knowledge.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Counsellors Across India</h3>
              <p className="text-gray-600">
                Expert counsellors in Maharashtra, UP, Karnataka and other states.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted College Tie-ups</h3>
              <p className="text-gray-600">
                Direct partnerships with 150+ top semi-government universities.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legal, Transparent Process</h3>
              <p className="text-gray-600">
                100% legal admissions with complete transparency and documentation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24x7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance throughout your admission journey.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">95% Success Rate</h3>
              <p className="text-gray-600">
                Proven track record with highest success rate in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Top Colleges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Top Colleges
            </h2>
            <p className="text-xl text-gray-600">
              Get direct admission in India's premier semi-government universities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colleges.map((college, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="p-8">
                  <div className="text-4xl mb-4 text-center">{college.logo}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                  <p className="text-gray-600 mb-3">{college.location}</p>
                  <p className="text-sm text-gray-500 mb-4">Courses: {college.courses}</p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {college.grade}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Government-Affiliated
                    </span>
                  </div>
                  <Link 
                    to="/contact" 
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    Get Admission Help
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/colleges" 
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center"
            >
              View All Colleges
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">100% Legal Process</h3>
              <p className="text-gray-600 text-sm">All admissions through legitimate channels with complete transparency</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">24 Hour Response</h3>
              <p className="text-gray-600 text-sm">Guaranteed callback within 24 hours of form submission</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">95% Success Rate</h3>
              <p className="text-gray-600 text-sm">Proven track record with thousands of successful admissions</p>
            </div>
          </div>
        </div>
      </section>
      {/* Simple CTA Strip */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Begin?</h3>
              <p className="text-gray-300">Join 10,000+ students who trusted AIIMERS</p>
            </div>
            <div className="flex space-x-4">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Free Counselling
              </Link>
              <Link 
                to="/colleges" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                Explore Colleges
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Dynamic from MongoDB */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Student Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Hear from our successful students who achieved their dreams
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="text-center">
                  <img
  src={testimonials[currentSlide].image?.url}
  alt={testimonials[currentSlide].name}
  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
/>
                  <blockquote className="text-2xl text-gray-700 mb-6 italic">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{testimonials[currentSlide].name}</h4>
                    <p className="text-blue-600 font-medium">{testimonials[currentSlide].course}</p>
                  </div>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home; 