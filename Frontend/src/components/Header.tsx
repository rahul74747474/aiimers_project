import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top sliding notification strip */}
      <div className="bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap relative">
        <div className="animate-marquee inline-block px-4">
          🚨 Limited Seats Left for MBBS 2025! Book Your Free Counselling Now 🚀 | Apply Today for Free Guidance 📞 | AIIMERS – Your Admission Partner for MBBS Abroad 🌍
        </div>
      </div>

      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.ibb.co/v4vzhHz5/logo-nav.png"
                alt="AIIMERS Logo"
                className="h-12 w-auto mr-2 object-contain scale-150 md:scale-[1.7]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 items-center">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About AIIMERS
              </Link>
              <Link
                to="/colleges"
                className={`font-medium transition-colors ${
                  isActive('/colleges') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Explore Colleges
              </Link>
              <Link
                to="/admission-process"
                className={`font-medium transition-colors ${
                  isActive('/admission-process') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Admission Process
              </Link>
              <Link
                to="/success-stories"
                className={`font-medium transition-colors ${
                  isActive('/success-stories') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Success Stories
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors ${
                  isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Free Counselling
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  About AIIMERS
                </Link>
                <Link to="/colleges" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  Explore Colleges
                </Link>
                <Link to="/admission-process" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  Admission Process
                </Link>
                <Link to="/success-stories" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  Success Stories
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                  Contact
                </Link>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Phone className="h-4 w-4 mr-1" />
                    <span>9101613924</span>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
                  >
                    Free Counselling
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
