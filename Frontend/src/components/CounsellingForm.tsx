import React, { useState } from 'react';

const CounsellingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const sendOtp = async () => {
    if (!formData.email) {
      alert('Please enter your email first.');
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/otp/send-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await res.json();
      if (res.ok) {
        setOtpSent(true);
        alert('OTP sent to your email');
      } else {
        alert(data.message || 'Failed to send OTP');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      alert('Please enter the OTP');
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/otp/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, otp }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setEmailVerified(true);
        alert('Email verified successfully!');
      } else {
        alert(data.message || 'Invalid OTP');
      }
    } catch (error) {
      console.error(error);
      alert('Error verifying OTP');
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailVerified) {
      alert('Please verify your email before submitting.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/form/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Form submitted successfully!');
        setSubmitted(true);
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Student Counselling Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border px-3 py-2 mb-4 rounded"
          onChange={handleChange}
          required
        />

        {/* Email */}
        <label className="block mb-2">Email</label>
        <div className="flex gap-2 items-center mb-4">
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="bg-blue-600 text-white px-3 py-1 rounded"
            onClick={sendOtp}
            disabled={emailVerified}
          >
            {otpSent && !emailVerified ? 'Resend OTP' : 'Send OTP'}
          </button>
        </div>

        {/* OTP */}
        {otpSent && !emailVerified && (
          <div className="mb-4">
            <label className="block mb-2">Enter OTP</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <button
                type="button"
                onClick={verifyOtp}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Verify
              </button>
            </div>
          </div>
        )}

        {/* Phone */}
        <label className="block mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          className="w-full border px-3 py-2 mb-4 rounded"
          onChange={handleChange}
          required
        />

        {/* Category */}
        <label className="block mb-2">Course Category</label>
        <input
          type="text"
          name="category"
          className="w-full border px-3 py-2 mb-4 rounded"
          onChange={handleChange}
          required
        />

        {/* Message */}
        <label className="block mb-2">Message</label>
        <textarea
          name="message"
          className="w-full border px-3 py-2 mb-4 rounded"
          onChange={handleChange}
          rows={4}
        />

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white px-4 py-2 rounded ${(!emailVerified || submitted || loading) ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!emailVerified || submitted || loading}
        >
          {loading ? 'Submitting...' : submitted ? 'Submitted' : 'Submit'}
        </button>

      </form>
    </div>
  );
};

export default CounsellingForm;
