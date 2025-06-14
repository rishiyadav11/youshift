'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#81C9F9] to-[#B5E5FB] px-6 py-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-10 space-y-10"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-700 text-lg">
            We'd love to hear from you. Fill out the form or{' '}
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-800 hover:text-blue-900 font-medium"
            >
              schedule a call
            </a>
            .
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black"
        >
          {[
            { placeholder: 'First Name', type: 'text' },
            { placeholder: 'Last Name', type: 'text' },
            { placeholder: 'Email', type: 'email' },
            { placeholder: 'Phone', type: 'tel' },
          ].map((input, idx) => (
            <input
              key={idx}
              type={input.type}
              placeholder={input.placeholder}
              className="p-4 rounded-xl bg-white/80 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          ))}

          <input
            type="text"
            placeholder="Hospital / Organization"
            className="md:col-span-2 p-4 rounded-xl bg-white/80 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="md:col-span-2 p-4 rounded-xl bg-white/80 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />

          <div className="flex items-start gap-3 md:col-span-2">
            <input
              type="checkbox"
              required
              className="mt-1 w-5 h-5 accent-blue-600"
            />
            <label className="text-gray-700">
              I accept the{' '}
              <a
                href="/privacy"
                className="underline text-blue-600 hover:text-blue-800"
              >
                privacy policy
              </a>
            </label>
          </div>

          <div className="md:col-span-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition"
            >
              {submitted ? '🎉 Message Sent!' : 'Send Message'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
