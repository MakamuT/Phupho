import React, { useState } from 'react';

const ContactPage = () => {
  // State to handle form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // State to manage UI feedback (loading, success, error)
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);   // Start loading when the form is submitted
    setError(null);     // Clear previous error message

    try {
      // API call to /api/contact endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send form data as JSON
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json(); // Parse JSON response

      // Check for success in the response
      if (data.success) {
        setSuccess(true);   // Set success message if the message was sent 
        // Clear form inputs
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setError(data.error); // Display the error message from the server
      }
    } catch (error) {
      console.error('Error:', error); // Log error to the console for debugging
      setError('An error occurred while sending the message.'); // Show a user-friendly error message
    } finally {
      setLoading(false); // Stop loading whether the request succeeded or failed
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-wrap -mx-4">
        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 xl:w-1/2 p-4">
          <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* Subject Input */}
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* Message Input */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading} // Disable button while submitting
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {/* Success and Error Messages */}
            {success && (
              <p className="text-green-500 mt-4">Message sent successfully!</p>
            )}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="w-full lg:w-1/2 xl:w-1/2 p-4">
          <h2 className="text-lg font-bold mb-4">Contact Information</h2>
          <div className="info-wrap">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              {/* Ensure Bootstrap Icons are included or use a different icon set */}
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
