import React from 'react';
import { 
  Award, 
  Users, 
  MapPin, 
  Target, 
  Eye, 
  Heart,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: "Mainak Chakraborty",
      role: "Founder & CEO",
      image: "👨‍💼",
      description: "10+ years in education consultancy with expertise in admission processes across India."
    },
    {
      name: "Satyam Singh", 
      role: "Co-Founder & COO",
      image: "👨‍🎓",
      description: "Specialist in student counselling and college partnerships with proven track record."
    }
  ];

  const offices = [
    {
      state: "Maharashtra",
      cities: ["Pune", "Mumbai", "Nashik"],
      colleges: "50+ Partner Colleges",
      icon: "🏢"
    },
    {
      state: "Karnataka", 
      cities: ["Bangalore", "Mysore"],
      colleges: "30+ Partner Colleges",
      icon: "🏛️"
    },
    {
      state: "Uttar Pradesh",
      cities: ["Noida", "Lucknow", "Kanpur"],
      colleges: "40+ Partner Colleges", 
      icon: "🎓"
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Students Placed", icon: Users },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "150+", label: "Partner Colleges", icon: Award },
    { number: "10+", label: "Years Experience", icon: Star }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-400">AIIMERS</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              MargDarshan Solution - Your trusted partner for career guidance and direct admission assistance to top colleges across India
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide transparent, expert-backed admission guidance that helps students secure seats in India's top semi-government universities. We believe every student deserves quality education and we make it accessible through our proven processes.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become India's most trusted education consultancy platform, bridging the gap between aspiring students and premier educational institutions while maintaining complete transparency and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">A decade of excellence in education consultancy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                    <span className="text-blue-600 font-bold">2014</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation</h3>
                    <p className="text-gray-600">Started as MargDarshan Solution with a vision to help students achieve their educational dreams.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-6">
                    <span className="text-green-600 font-bold">2017</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expansion</h3>
                    <p className="text-gray-600">Expanded operations to Maharashtra, Karnataka, and UP with 50+ college partnerships.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-6">
                    <span className="text-purple-600 font-bold">2020</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Transformation</h3>
                    <p className="text-gray-600">Launched online platform and achieved 5,000+ successful admissions milestone.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-6">
                    <span className="text-yellow-600 font-bold">2024</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Market Leader</h3>
                    <p className="text-gray-600">Achieved 10,000+ student placements with 95% success rate and 150+ college partnerships.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <achievement.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts behind AIIMERS success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-6">{founder.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{founder.role}</p>
                <p className="text-gray-600 leading-relaxed">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Presence</h2>
            <p className="text-xl text-gray-600">Offices across India with local expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-6 text-center">{office.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{office.state}</h3>
                <div className="space-y-3 mb-6">
                  {office.cities.map((city, cityIndex) => (
                    <div key={cityIndex} className="flex items-center">
                      <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-blue-800 font-semibold">{office.colleges}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Office */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Head Office</h3>
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <p className="text-gray-700">
                  Shop No. C4, Harmony, near DY Patil College, Akurdi, Sector No. 32, Ravet, Pune, Maharashtra 411044
                </p>
              </div>
              <div className="flex justify-center space-x-8">
                <div className="flex items-center">
                  <span className="text-blue-600 font-semibold">📞 9101613924</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 font-semibold">📞 7020934294</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Students Trust AIIMERS</h2>
            <p className="text-xl text-blue-100">Our commitment to excellence and transparency</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student-Centric Approach</h3>
              <p className="text-blue-100">Every decision is made with student success in mind</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Legal Process</h3>
              <p className="text-blue-100">All admissions through legitimate channels only</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-blue-100">Experienced counsellors with deep industry knowledge</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-blue-100">95% success rate with 10,000+ happy students</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;