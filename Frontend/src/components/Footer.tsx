import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://i.ibb.co/gBV4gs7/logo-footer.png"
                alt="AIIMERS Logo"
                className="h-12 w-auto mr-2 mb-4 object-contain scale-1"
              />
              <div>
                <h3 className="text-xl font-bold">AIIMERS</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Expert career guidance and direct admission assistance to top colleges across India.
            </p>
            <div className="flex space-x-3">
              <a href="https://wa.me/916002069981" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <span className="text-sm font-bold">W</span>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About AIIMERS</Link></li>
              <li><Link to="/colleges" className="text-gray-400 hover:text-white transition-colors">Explore Colleges</Link></li>
              <li><Link to="/admission-process" className="text-gray-400 hover:text-white transition-colors">Admission Process</Link></li>
              <li><Link to="/success-stories" className="text-gray-400 hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <div className="text-gray-400">9101613924</div>
                  <div className="text-gray-400">7020934294</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@aiimers.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Shop No. C4, Harmony, near DY Patil College, Akurdi, Sector No. 32, Ravet, Pune, Maharashtra 411044
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AIIMERS. All rights reserved.
            </p>

          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Founded by Mainak Chakraborty | Co-founded by Satyam Singh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;