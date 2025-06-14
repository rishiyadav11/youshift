'use client';

import React from 'react';

const page = () => {
  return (
    <section className="min-h-screen  py-20 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md shadow-xl rounded-xl p-10">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Cookie Policy</h1>

        <p className="mb-4">
          On our website, <strong>we do not use cookies</strong>. We respect your privacy and are committed to ensuring that
          your experience on our site is safe and free from tracking.
        </p>

        <p className="mb-4">
          We do not collect personal information or use any tracking mechanisms to analyze your online activities.
        </p>

        <p className="mb-4">
          If in the future, we decide to implement the use of cookies, we will update this policy and provide you with
          the necessary information regarding their use and purpose. We want to assure you that any changes will be made
          in compliance with all applicable laws and regulations on privacy and data protection.
        </p>

        <p className="mb-4">
          If you have any questions or concerns about our Cookie Policy, please do not hesitate to{' '}
          <a href="/contact" className="text-[#3F8EFC] underline hover:text-[#1a72db] transition">
            contact us
          </a>{' '}
          using the information provided on our website.
        </p>

        <p className="mt-6 text-sm text-gray-600">
          We appreciate your trust and invite you to explore our website without worries of tracking or the use of cookies.
        </p>

        <p className="mt-4 text-xs text-gray-500">Last updated: 11/06/2023</p>
      </div>
    </section>
  );
};

export default page;
