'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [hasAccount, setHasAccount] = useState<null | boolean>(null);
  const [industry, setIndustry] = useState('');
  const router = useRouter();

  const handleRedirect = () => {
    if (!industry) return;
    const industrySlug = industry.toLowerCase();
    router.push(`https://www.you-shift.com/signup/manager/${industrySlug}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#81C9F9] to-[#B5E5FB] px-6 py-20">
      <div className="w-full max-w-xl bg-white/60 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl p-10 space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-md">Welcome to YouShift</h1>
          <p className="mt-2 text-lg text-gray-700">Empowering shift management for modern teams.</p>
        </div>

        {hasAccount === null && (
          <div className="space-y-6 text-center">
            <p className="text-gray-800 font-medium text-lg">How do you want to proceed?</p>
            <div className="flex justify-center gap-8 flex-col   md:flex-row items-center">
              <a
                href="https://www.you-shift.com/login"
                className="flex flex-col justify-center items-center w-36 h-36 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                <span className="text-sm font-semibold">Already a member?</span>
                <span className="text-2xl font-bold mt-1">Sign In</span>
              </a>

              <button
                onClick={() => setHasAccount(false)}
                className="flex flex-col justify-center items-center w-36 h-36 border-4 border-blue-600 text-blue-600 rounded-full shadow-md hover:bg-blue-50 transition-all duration-300"
              >
                <span className="text-sm font-semibold">New here?</span>
                <span className="text-2xl font-bold mt-1">Sign Up</span>
              </button>
            </div>
          </div>
        )}

        {hasAccount === false && (
          <div className="space-y-6">
            <label className="block text-gray-800 text-lg font-medium">Select your industry</label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full p-4 rounded-xl bg-white text-gray-800 border-2 border-blue-300 focus:ring-2 focus:ring-blue-500 shadow-inner transition"
            >
              <option value="">-- Select Industry --</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Logistics">Logistics</option>
              <option value="Sales">Sales</option>
              <option value="Other">Other</option>
            </select>

            <button
              onClick={handleRedirect}
              disabled={!industry}
              className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 ${
                industry
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
            >
              Continue
            </button>

            <button
              onClick={() => setHasAccount(null)}
              className="block text-sm text-blue-700 underline mt-4 hover:text-blue-900 text-center"
            >
              ← Back to options
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
