'use client';

import React from 'react';

const steps = [
  {
    title: '1. Set Your Preferences',
    description:
      'Employees indicate preferred shifts, days off, and availability. A smart points-based system ensures fair, preference-driven assignments.',
    icon: '🧭',
  },
  {
    title: '2. Configure Your Rules',
    description:
      'Define your scheduling needs—maximum hours, mandatory rest between shifts, specialty roles, and multi-location coverage.',
    icon: '⚙️',
  },
  {
    title: '3. Auto‑Generate Schedule',
    description:
      'Click “Generate” and let YouShift produce a fully compliant, optimized schedule in seconds—no manual effort required.',
    icon: '🤖',
  },
  {
    title: '4. Refine & Approve',
    description:
      'Use the intuitive editor to resolve conflicts, make swaps, or fine-tune. Every change checks compliance in real-time.',
    icon: '✏️',
  },
  {
    title: '5. Publish & Monitor',
    description:
      'Share schedules instantly with your team. Handle swaps, time‑offs, and insights—right from the dashboard.',
    icon: '📤',
  },
];

const Howitworks = () => {
  return (
    <section className="relative overflow-hidden bg-none py-20 px-6 md:px-12">
      {/* Glow Effects */}
      <div className="absolute left-[-10px] top-[0px] h-[150px] w-[150px] rounded-full bg-[#00D38A] opacity-30 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-30px] right-[0px] h-[200px] w-[200px] rounded-full bg-gradient-to-br from-[#00D38A] to-[#3F8EFC] opacity-40 blur-3xl animate-pulse" />

      <div className="max-w-7xl relative mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black">
          How YouShift Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center p-6 rounded-xl border border-white/10 bg-white/10  backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-4 animate-bounce">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 ">{step.title}</h3>
              <p className="text-sm text-gray-600  mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
