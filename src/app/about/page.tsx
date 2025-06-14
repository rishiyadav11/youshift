"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#81C9F9] to-[#B5E5FB] px-6 py-16 text-gray-900 md:px-12">
      <section className="mx-auto max-w-5xl space-y-16">
        {/* Founding Story */}
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Our Founding Story
          </h1>
          <p className="text-lg">
            YouShift was born in 2023, founded by engineers and healthcare
            professionals from Harvard, including Jota Chamorro, Adolfo Roquero
            Gimenez, and Lucía Vives Martorell. Their mission was sparked by
            witnessing medical professionals struggle with chaotic,
            spreadsheet‑driven schedules. Combining AI and domain expertise,
            they set out to build a smarter, fairer, and more flexible
            scheduling platform.
          </p>
          <p className="mt-4 text-lg">
            We’ve seen this problem firsthand — we all grew up seeing doctors in
            our family struggle with chaotic schedules, last-minute changes, and
            burnout. Hearing their frustrations made us realize how outdated the
            system is, and we knew technology could do better. While still
            undergrads at Harvard, we decided to team up and tackle this
            problem. Now, more than 1,000 doctors across Europe and the US use
            YouShift to create their schedules.
          </p>
        </div>

        {/* Problem */}
        <div>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            The Problem
          </h2>
          <p className="text-lg">
            Hospitals use complex, unintuitive scheduling software that still
            requires full-time administrators to manage it. Entire teams spend
            hours juggling shifts, fixing errors, and handling last-minute
            changes — leading to inefficiencies, staff dissatisfaction, and
            billions in lost productivity.
          </p>
          <p className="mt-4 text-lg">
            Most hospitals rely on manual scheduling processes and fragmented
            platforms that don’t integrate. Schedulers and physicians waste
            hours adjusting shifts and transferring data between disconnected
            systems. This increases errors, delays, and staff burnout — which
            ultimately harms patient care.
          </p>
        </div>

        {/* Solution */}
        <div>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Our Solution
          </h2>
          <p className="text-lg">
            YouShift replaces manual work with AI-powered automation that
            creates fair, efficient, and compliant schedules. Unlike traditional
            tools, we don’t just digitize spreadsheets — we replace them with
            intelligent systems that optimize for both hospital operations and
            staff well-being.
          </p>
          <div className="mt-6 aspect-video">
            <iframe
              className="h-full w-full rounded-xl shadow-xl"
              src="https://www.youtube.com/embed/GgKVlw3L-GA"
              title="YouShift Launch Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Vision Expansion */}
        <div>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Scheduling is Just the Beginning
          </h2>
          <p className="mb-4 text-lg">
            We’re not stopping at scheduling. Our vision is to build the
            all-in-one healthcare workforce management platform — think Rippling
            for healthcare.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-lg">
            <li>Payroll & time tracking</li>
            <li>Credentialing & compliance</li>
            <li>Hiring, staffing analytics & workforce optimization</li>
          </ul>
        </div>

        {/* Mission & Vision */}
        <div>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Our Mission & Vision
          </h2>
          <ul className="list-disc space-y-3 pl-6 text-lg">
            <li>
              <strong>Mission:</strong> To replace spreadsheets, calls, and
              burnout with AI‑powered, compliant, and preference‑based
              scheduling that empowers providers and supports care delivery.
            </li>
            <li>
              <strong>Vision:</strong> To build Rippling‑style workforce
              management tailored for healthcare — covering everything from
              scheduling and payroll to credentialing and analytics.
            </li>
          </ul>
        </div>

        {/* Team Bios */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">
            Meet the Founders
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Lucía Vives Martorell",
                role: "Co‑Founder",
                bio: "Biomedical Science from UCL & Harvard, dedicated to reducing burnout in healthcare through intelligent scheduling.",
                img: "/member/lucia.jpg",
              },
              {
                name: "Jota Chamorro",
                role: "Co‑Founder & CPO",
                bio: "Harvard CS grad focused on improving doctors’ lives via fast, fair, and flexible scheduling tools.",
                img: "/member/jota.jpg",
              },
              {
                name: "Adolfo Roquero Gimenez",
                role: "Co‑Founder",
                bio: "Harvard‑educated Software Engineer who built large‑scale systems at Google Ads before founding YouShift.",
                img: "/member/adolfo.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/30 p-6 text-center shadow-lg backdrop-blur-md"
              >
                <div className="relative mx-auto mb-4 h-32 w-32">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="font-medium text-teal-700">{member.role}</p>
                <p className="mt-2 text-sm text-gray-800">{member.bio}</p>
              </div>
            ))}
          </div>
          {/* Future Vision & Team Expansion */}
          <div className="mt-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Looking Ahead
            </h2>
            <p className="mx-auto max-w-3xl text-lg">
              As YouShift scales, we’re bringing on exceptional builders who
              resonate with our mission. Among them is{" "}
              <span className="font-semibold text-blue-900">Rishi Yadav</span> —
              a passionate full-stack engineer and product-thinker who shares
              our obsession with solving meaningful problems in healthcare.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-800">
              If selected, Rishi will join as a{" "}
              <span className="font-medium italic">Founding Engineer</span>,
              helping architect the future of YouShift with the same heart,
              grit, and velocity that shaped its beginnings. His energy and
              vision reflect the spirit we believe in: mission-first,
              product-obsessed, and relentlessly user-focused.
            </p>
           <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">
  Meet the Future Founding Engineer
</h2>
<div className="flex justify-center w-[30%] mx-auto">
  <div className="rounded-2xl bg-white/30 p-6 text-center shadow-lg backdrop-blur-md">
    <div className="relative mx-auto mb-4 h-32 w-32">
      <Image
        src="/member/rishi.jpeg"
        alt="Rishi Yadav"
        fill
        className="rounded-full object-cover"
      />
    </div>
    <h3 className="text-xl font-bold">Rishi Yadav</h3>
    <p className="font-medium text-teal-700">Future Founding Engineer</p>
    <p className="mt-2 text-sm text-gray-800">
      Full-stack developer and product builder, passionate about solving
      real-world problems in healthcare through elegant and scalable
      technology.
    </p>
  </div>
</div>
</div>


          <p className="mt-8 text-center text-xl font-semibold text-gray-700">
            We’re a mission‑driven, tight‑knit team backed by Y Combinator and
            trusted by hospitals across the US and Spain.
          </p>
          <div className="flex justify-center">
            <Image
              src="/member/members.webp"
              alt="Y Combinator"
              width={400}
              height={400}
              className="mt-10 w-80 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Let’s Talk
          </h2>
          <p className="mx-auto max-w-3xl text-lg">
            We’re looking to connect with hospital leaders and medical teams
            struggling with scheduling. If you or someone in your network deals
            with scheduling challenges, we’d love to hear from you and see how
            YouShift can help.
          </p>
          <Link href="/contact">
            <p className="mt-4 font-medium text-blue-700 transition-all duration-500 hover:underline">
              Reach out or introduce us — we’d greatly appreciate it!
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
