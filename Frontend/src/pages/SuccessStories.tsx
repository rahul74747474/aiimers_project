import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Quote,
  ArrowRight,
  GraduationCap,
  Award,
  Users,
  TrendingUp,
} from 'lucide-react';
import axios from 'axios';

interface Story {
  _id: string;
  name: string;
  course: string;
  college: string;
image?: {
    public_id: string;
    url: string;
  };
  quote: string;
  year: string;
  score: string;
  category: 'MBBS' | 'BTech' | 'MBA' | string;
}

interface Video {
  videoId: string;
  title: string;
  thumbnail: string;
}

const SuccessStories = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [stories, setStories] = useState<Story[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filters = ['All', 'MBBS', 'BTech', 'MBA'];

  const stats = [
    { number: '10,000+', label: 'Success Stories', icon: Users },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
    { number: '150+', label: 'Partner Colleges', icon: GraduationCap },
    { number: '10+', label: 'Years Experience', icon: Award },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [storiesRes, videosRes] = await Promise.all([
          axios.get(`https://aiimers-project.onrender.com/api/success-stories`),
          //axios.get(`https://aiimers-project.onrender.com/api/videos`),
        ]);
        setStories(storiesRes.data || []);
        setVideos(videosRes.data || []);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load success stories or videos.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredStories = selectedFilter === 'All'
    ? stories
    : stories.filter((story) => story.category === selectedFilter);

  if (loading) {
    return <div className="py-20 text-center text-xl text-blue-600 font-semibold">Loading success stories...</div>;
  }

  if (error) {
    return <div className="py-20 text-center text-red-600 font-semibold">{error}</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Student <span className="text-yellow-400">Success Stories</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real stories from real students who achieved their dreams with AIIMERS guidance
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Filter by Course</h2>
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${selectedFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 text-gray-600 text-center">
          Showing {filteredStories.length} success stories
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div key={story._id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={story.image?.url}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-blue-600 font-medium">{story.course}</p>
                    <p className="text-gray-600 text-sm">{story.college}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <Quote className="h-6 w-6 text-blue-600 mb-3" />
                  <p className="text-gray-700 italic leading-relaxed">"{story.quote}"</p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div><span className="font-semibold">Year:</span> {story.year}</div>
                  <div>{story.score}</div>
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600 mb-2">Course Category</p>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${story.category === 'MBBS'
                        ? 'bg-red-100 text-red-800'
                        : story.category === 'BTech'
                          ? 'bg-blue-100 text-blue-800'
                          : story.category === 'MBA'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-200 text-gray-800'
                      }`}
                  >
                    {story.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* YouTube Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
          <p className="text-xl text-gray-600">Hear directly from our successful students</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {videos.map((video) => (
            <a
              key={video.videoId}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              title={video.title}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold">{video.title}</h4>
                <p className="text-sm text-gray-500 mt-1">Click to watch on YouTube</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who achieved their dreams with AIIMERS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/colleges"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Colleges
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories; 
