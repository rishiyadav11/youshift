'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What custom rules can be set in YouShift?',
    answer:
      'Yes, YouShift allows you to create specific rules according to your needs. You can define schedules, shift types, work hour limits, rest periods between shifts, employee incompatibilities, and much more, all customized for your team.',
  },
  {
    question: 'Does the system send automatic reminders to employees?',
    answer:
      'Yes, YouShift sends automatic reminders for assigned shifts, pending requests, or shift changes, helping to keep everyone informed.',
  },
  {
    question: 'Is YouShift compatible with different types of jobs or industries?',
    answer:
      'Yes. Although YouShift was designed for hospitals and medical centers, its flexibility makes it ideal for any sector that needs efficient shift management.',
  },
  {
    question: 'Can I try YouShift before committing?',
    answer:
      'Yes, we offer a free trial so you can experience all the features before subscribing.',
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
       <section className="relative overflow-hidden bg-none py-20 px-6 md:px-12">
      {/* Glow Effects */}
      <div className="absolute left-[-10px] top-[0px] h-[150px] w-[150px] rounded-full bg-[#00D38A] opacity-30 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-30px] right-[0px] h-[200px] w-[200px] rounded-full bg-gradient-to-br from-[#00D38A] to-[#3F8EFC] opacity-40 blur-3xl animate-pulse" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Frequently Asked Questions</h2>
          <p className="mt-3 text-gray-600 text-base">
            Can’t find the answer to your question?{' '}
            <Link href="/contact" className="text-[#3F8EFC] font-semibold hover:underline">
              Contact Us →
            </Link>
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all rounded-xl bg-white/80 backdrop-blur-lg shadow-xl border-l-4 ${
                openIndex === index ? 'border-[#3F8EFC]' : 'border-transparent'
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-[#3F8EFC]' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 pb-5 pr-10 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
