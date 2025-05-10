import React, { useState } from 'react';

export default function SellHere() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', licenseType: '', message: '' });
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', company: '', licenseType: '', message: '' }); // Clear form
    setSubmitMessage('Form submitted successfully!');
    // Optionally clear the message after 3 seconds
    setTimeout(() => setSubmitMessage(''), 3000);
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-center mb-8  mt-8">Sell Here!!</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-lg border-2 border-gray-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-lg border-2 border-gray-200"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="p-4 rounded-lg border-2 border-gray-200"
          />
          <select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            className="bba6ab0c-5f6e-4ef9-a0b1-2b2c91e4c6f9"
          >
            <option value="">Select License Type</option>
            <option value="software">Software</option>
            <option value="plugin">Plugin</option>
            <option value="addon">Addon</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 rounded-lg border-2 border-gray-200 mb-4"
          required
        ></textarea>
        <div className="flex flex-wrap items-center">
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 w-full mb-4"
          >
            Submit
          </button>
          {submitMessage && (
            <p className="text-green-600 text-center">{submitMessage}</p>
          )}
        </div>
      </form>
    </section>
  );
}