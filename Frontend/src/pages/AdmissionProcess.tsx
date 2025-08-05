import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Phone, 
  Search, 
  CheckCircle, 
  GraduationCap,
  ArrowRight,
  Clock,
  Users,
  Shield,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const AdmissionProcess = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: "Fill Free Form",
      description: "Complete our simple online form with your academic details and course preferences",
      icon: FileText,
      color: "blue",
      details: [
        "Basic personal information",
        "Academic qualifications", 
        "Course preferences",
        "Preferred colleges and locations"
      ]
    },
    {
      number: 2,
      title: "Counsellor Callback",
      description: "Our expert counsellor will call you within 24 hours for personalized guidance",
      icon: Phone,
      color: "green",
      details: [
        "Career guidance session",
        "Course suitability analysis",
        "College recommendations",
        "Fee structure discussion"
      ]
    },
    {
      number: 3,
      title: "Shortlist Colleges",
      description: "We help you shortlist the best colleges based on your profile and preferences",
      icon: Search,
      color: "purple",
      details: [
        "College comparison analysis",
        "Admission probability assessment",
        "Fee and scholarship options",
        "Campus visit arrangements"
      ]
    },
    {
      number: 4,
      title: "Verify Documents",
      description: "Complete document verification and application submission assistance",
      icon: CheckCircle,
      color: "yellow",
      details: [
        "Document checklist preparation",
        "Verification and attestation",
        "Application form filling",
        "Submission tracking"
      ]
    },
    {
      number: 5,
      title: "Confirm Admission",
      description: "Final admission confirmation and seat allocation with complete support",
      icon: GraduationCap,
      color: "red",
      details: [
        "Seat allocation confirmation",
        "Fee payment guidance",
        "Admission formalities",
        "Orientation support"
      ]
    }
  ];

  const faqs = [
    {
      question: "Is management quota legal?",
      answer: "Yes, management quota is completely legal. It's a legitimate admission route approved by regulatory bodies like UGC, AICTE, and MCI. Colleges reserve a certain percentage of seats for management quota admissions."
    },
    {
      question: "Do you help with NRI seats?",
      answer: "Yes, we assist with NRI quota admissions. We have tie-ups with colleges that offer NRI seats in various courses including MBBS, BTech, and MBA programs."
    },
    {
      question: "Can I get MBBS without high NEET score?",
      answer: "Yes, through management quota and NRI quota, you can secure MBBS admission even with lower NEET scores. We help you find colleges that match your score range."
    },
    {
      question: "What documents are required for admission?",
      answer: "Required documents include: 10th & 12th mark sheets, entrance exam scorecard, transfer certificate, conduct certificate, passport size photos, Aadhar card, and caste certificate (if applicable)."
    },
    {
      question: "How much do your services cost?",
      answer: "Our counselling services are completely FREE. We only charge a nominal processing fee after successful admission confirmation. No hidden charges or upfront payments."
    },
    {
      question: "Do you provide scholarship information?",
      answer: "Yes, we provide complete information about available scholarships, government schemes, and financial aid options. We help you apply for relevant scholarships."
    },
    {
      question: "What is the admission timeline?",
      answer: "Admission timelines vary by course and college. Generally, admissions start from May-June for most courses. We keep you updated with all important dates and deadlines."
    },
    {
      question: "Can you help with hostel accommodation?",
      answer: "Yes, we assist with hostel bookings and accommodation arrangements. We have tie-ups with colleges and private hostels to ensure comfortable stay for students."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600", 
      purple: "bg-purple-100 text-purple-600",
      yellow: "bg-yellow-100 text-yellow-600",
      red: "bg-red-100 text-red-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How <span className="text-yellow-400">AIIMERS</span> Works
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Simple, transparent, and proven 5-step process to secure your admission in top colleges
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Admission Process</h2>
            <p className="text-xl text-gray-600">Follow these simple steps to secure your dream college admission</p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-gray-300 hidden md:block"></div>
                )}
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="flex items-start">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-6 ${getColorClasses(step.color)}`}>
                        <step.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            {step.number}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 text-lg mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="bg-gray-50 rounded-2xl p-8 text-center">
                      <div className="text-6xl mb-4">
                        {step.number === 1 && "📝"}
                        {step.number === 2 && "📞"}
                        {step.number === 3 && "🎯"}
                        {step.number === 4 && "📋"}
                        {step.number === 5 && "🎓"}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Step {step.number}</h4>
                      <p className="text-gray-600">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Process Works</h2>
            <p className="text-xl text-gray-600">Proven methodology with 95% success rate</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600">24-hour callback guarantee ensures you never wait</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Experienced counsellors with deep industry knowledge</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent Process</h3>
              <p className="text-gray-600">No hidden fees, complete transparency at every step</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">95% success rate with 10,000+ successful admissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common admission queries</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Admission Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Take the first step towards your dream college. Fill our form and get expert guidance within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Start Free Counselling
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <a 
              href="tel:+919101613924" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Now: 9101613924
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcess;