import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Search, Filter, MapPin, Award, BookOpen, Users, Star, ArrowRight, CheckCircle
} from 'lucide-react';

interface College {
  _id: string;
  name: string;
  location: string;
  state?: string;
  courses: string[];
  naacGrade: string;
  established?: string;
   image?: {
    public_id: string;
    url: string;
  }
  // highlights: string[];
  fees?: string;
  seats?: string;
}

const Colleges = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [selectedState, setSelectedState] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/colleges`);
console.log("API URL is:", import.meta.env.VITE_API_URL);
        
        // ✅ Format the response properly
        const formatted: College[] = res.data.map((college: any) => ({
          _id: college._id,
          name: college.name,
          location: college.location,
          state: college.location.split(',')[1]?.trim() || 'Unknown',
          courses: typeof college.courses === 'string'
            ? college.courses.split(',').map((c: string) => c.trim())
            : college.courses ?? [],
          naacGrade: college.grade ?? 'N/A',
          established: college.established ?? 'Unknown',
          logo: college.logo ?? '🎓',
          image: college.image ?? 'https://via.placeholder.com/400',
          highlights: college.highlights ?? [],
          fees: 'Contact Counseller',
          seats: 'Contact Counseller',
        }));

        setColleges(formatted);
      } catch (err) {
        console.error('Error fetching colleges:', err);
        setError('Failed to load colleges.');
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  const states = ['All', 'Maharashtra', 'Karnataka', 'Uttar Pradesh', 'Tamil Nadu'];
  const courses = ['All', 'MBBS', 'BTech', 'MBA', 'Pharmacy', 'Law'];

  const filteredColleges = colleges.filter(college => {
    const matchesState = selectedState === 'All' || college.state === selectedState;
    const matchesCourse = selectedCourse === 'All' || college.courses.some(course =>
      course.toLowerCase().includes(selectedCourse.toLowerCase())
    );
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesState && matchesCourse && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore <span className="text-yellow-400">Top Colleges</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover India's premier semi-government universities and get direct admission assistance
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="flex flex-col md:flex-row gap-4 items-center max-w-7xl mx-auto px-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search colleges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="relative">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="appearance-none border border-gray-300 rounded-lg px-4 py-3 pr-8"
            >
              {states.map(state => (
                <option key={state} value={state}>{state === 'All' ? 'All States' : state}</option>
              ))}
            </select>
            <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          <div className="relative">
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="appearance-none border border-gray-300 rounded-lg px-4 py-3 pr-8"
            >
              {courses.map(course => (
                <option key={course} value={course}>{course === 'All' ? 'All Courses' : course}</option>
              ))}
            </select>
            <BookOpen className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="text-gray-600 mt-4 text-center">
          Showing {filteredColleges.length} colleges
        </div>
      </section>

      {/* Loader or Error */}
      {loading ? (
        <div className="text-center py-20 text-lg">Loading colleges...</div>
      ) : error ? (
        <div className="text-center py-20 text-red-500">{error}</div>
      ) : (
        <section className="py-20 bg-gray-50">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {filteredColleges.map((college) => (
              <div key={college._id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img src={college.image?.url} alt={college.name} className="w-full h-48 object-cover" />
                  {/* <div className="absolute top-4 left-4 text-3xl">{college.logo}</div> */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {college.naacGrade}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{college.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Award className="h-4 w-4 mr-1" />
                    <span className="text-sm">Est. {college.established}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Courses Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {college.courses.slice(0, 3).map((course, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{course}</span>
                      ))}
                      {college.courses.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{college.courses.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Fees Range:</span>
                      <div className="font-semibold text-gray-900">{college.fees}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Total Seats:</span>
                      <div className="font-semibold text-gray-900">{college.seats}</div>
                    </div>
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

          {filteredColleges.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No colleges found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Colleges;
