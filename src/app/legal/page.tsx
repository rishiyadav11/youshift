'use client';

import React from 'react';

const Page = () => {
  return (
    <section className="min-h-screen  py-20 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md shadow-xl rounded-xl p-10">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Legal Notice</h1>

        <p className="mb-4">
          Welcome to our website. Below, we provide you with the legal information you need to know before using our
          services. By accessing and using this website, you agree to the terms and conditions set forth in this Legal
          Notice. If you do not agree with these terms, we recommend that you do not continue browsing this site.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Information of the Website Owner</h2>
        <p className="mb-4">
          <strong>YouShift Systems</strong> <br />
          CIF: B56196066 <br />
          Sector Músicos 14, 28760, Tres Cantos, Madrid <br />
          +34 644 327 002 <br />
          <a href="mailto:info@you-shift.com" className="text-[#3F8EFC] hover:underline">
            info@you-shift.com
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Purpose of the Website</h2>
        <p className="mb-4">
          The purpose of this website is to provide information about our services and offer resources related to the
          automated assignment of medical on-call shifts. We strive to keep the information up to date and accurate, but
          we do not offer express or implied guarantees regarding the integrity, accuracy, or suitability of the
          information presented on this site.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Use of the Website</h2>
        <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
          <li>The content of this website is for informational purposes only and does not constitute professional or medical advice.</li>
          <li>We are not liable for any loss or damage arising from the use of the information or services provided on this website.</li>
          <li>You agree to use this website in accordance with applicable law and not to engage in activities that may interfere with its operation or cause harm to other users.</li>
          <li>Reproduction, distribution, or modification of the content of this website without our prior written consent is prohibited.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">Links to Third-Party Websites</h2>
        <p className="mb-4">
          This website may contain links to third-party websites. These links are provided for your convenience only. We
          have no control over the content or privacy policies of such third-party websites and are not responsible for
          them.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Protection of Personal Data</h2>
        <p className="mb-4">
          The collection and use of personal data are governed by our{' '}
          <a href="/privacy" className="text-[#3F8EFC] hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Intellectual Property</h2>
        <p className="mb-4">
          All intellectual property rights related to the content and design of this website are owned by YouShift or used
          with permission from the rights holders. Reproduction, distribution, or modification of any content without prior
          written authorization is prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Modifications</h2>
        <p className="mb-4">
          We reserve the right to modify, update, or remove any part of this Legal Notice at any time and without prior
          notice. We recommend that you periodically review this page to stay informed of any changes made.
        </p>

        <p className="mt-6 text-sm text-gray-600">
          If you have any questions or inquiries about this Legal Notice, you can contact us using the contact information
          provided above.
        </p>

        <p className="mt-4 text-xs text-gray-500">Last updated: 11/06/2023</p>
      </div>
    </section>
  );
};

export default Page;
