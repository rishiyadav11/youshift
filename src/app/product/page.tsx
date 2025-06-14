'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Featuretimeline from 'components/Featuretimeline';
import { AnimatedTestimonialsDemo } from 'components/Testimonials';

const features = [
  {
    title: 'AI-Powered Scheduling',
    desc: 'Create optimal shift rotations with just one click — no spreadsheets, no hassle.',
    icon: '/icons/ai.png',
  },
  {
    title: 'Custom Rules Engine',
    desc: 'Define preferences, rest periods, conflicts, and compliance policies easily.',
    icon: '/icons/rules.png',
  },
  {
    title: 'Real-time Notifications',
    desc: 'Notify staff of new shifts, changes, or requests with real-time alerts.',
    icon: '/icons/notify.png',
  },
  {
    title: 'Analytics & Insights',
    desc: 'Visual dashboards to monitor staffing levels, overtime, and workload distribution.',
    icon: '/icons/analytics.png',
  },
];

export default function ProductPage() {
  return (
    <div className=" text-gray-800">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Intelligent Shift Scheduling for Modern Hospitals
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Let YouShift do the heavy lifting. Automate scheduling, eliminate conflicts, and empower your team.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-gradient-to-r from-[#00D38A] to-[#3F8EFC] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            Try for Free →
          </Link>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/logo.png"
            alt="YouShift Hero"
            width={600}
            height={400}
            className="mx-auto rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Designed to Make Scheduling Effortless
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={40}
                  height={40}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  <p className="text-gray-600 mt-2">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
<Featuretimeline/>
<AnimatedTestimonialsDemo/>

      </section>

      {/* Call To Action */}
      <section className="text-center py-24 bg-[#f6fcff]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Start simplifying your hospital’s scheduling today
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Join the hospitals saving hours every week with YouShift.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-gradient-to-r from-[#00D38A] to-[#3F8EFC] px-10 py-4 rounded-full text-white text-lg font-semibold hover:scale-105 transition shadow-xl"
        >
          Get Started Free →
        </Link>
      </section>
    </div>
  );
}
