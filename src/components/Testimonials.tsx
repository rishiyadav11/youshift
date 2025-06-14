"use client";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { testimonials } from "../constants/constant";

export function AnimatedTestimonialsDemo() {
  return (
    <section className="relative overflow-hidden bg-none px-6 py-20 md:px-12">
      {/* Glow Effects */}
      <div className="absolute top-[0px] left-[-10px] h-[150px] w-[150px] animate-pulse rounded-full bg-[#00D38A] opacity-30 blur-3xl" />
      <div className="absolute right-[0px] bottom-[-30px] h-[200px] w-[200px] animate-pulse rounded-full bg-gradient-to-br from-[#00D38A] to-[#3F8EFC] opacity-40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl space-y-2 text-center">
        <h2 className="text-4xl font-extrabold text-black md:text-5xl">
          Don't just take our word for it
        </h2>
        <h3 className="text-lg font-semibold text-gray-600 md:text-xl">
          Thousands of professionals already save time with YouShift
        </h3>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
