import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea className="w-full p-3 border border-gray-300 rounded" rows="5"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
