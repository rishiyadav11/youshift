'use client';

import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-[#00D38A] to-[#3F8EFC] overflow-hidden rounded-3xl shadow-2xl mx-auto max-w-7xl my-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent opacity-30 pointer-events-none" />
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to automate your shift scheduling?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Save hours of manual work. Improve compliance. Keep your team happy. Start using YouShift today—it's fast, smart, and powerful.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/signup"
            className="bg-white text-[#00D38A] hover:text-white hover:bg-black transition font-semibold px-6 py-3 rounded-full shadow-lg"
          >
            Get Started Free
          </Link>
          <Link
            href="/product"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-[#00D38A] transition font-semibold px-6 py-3 rounded-full"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
