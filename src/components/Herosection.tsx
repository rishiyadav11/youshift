"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import classNames from "classnames";
import "dayjs/locale/en"; // optional for better locale control
import Link from "next/link";

const shifts: Record<
  number,
  { label: string; time: string; hours: string; color: string }
> = {
  3: { label: "ER", time: "7a–7p", hours: "12h", color: "bg-blue-600" },
  8: { label: "Clinic", time: "9a–5p", hours: "Day", color: "bg-purple-500" },
  12: {
    label: "ICU",
    time: "3p–11p",
    hours: "Evening",
    color: "bg-emerald-600",
  },
  15: { label: "ER", time: "7p–7a", hours: "Night", color: "bg-blue-600" },
  19: { label: "Surg", time: "8a–4p", hours: "Day", color: "bg-fuchsia-500" },
  24: {
    label: "Urgent",
    time: "12p–8p",
    hours: "Support",
    color: "bg-cyan-700",
  },
  28: { label: "ER", time: "7a–7p", hours: "12h", color: "bg-blue-600" },
};

const days = ["Su", "M", "T", "W", "Th", "F", "S"];

const HeroSection = () => {
  const today = dayjs(); // This stays constant during renders
  const [currentDate, setCurrentDate] = useState(today);
  const [viewMode, setViewMode] = useState<"month" | "week">("month");
  const blockedMonths = [2, 5, 11]; // March, June, December

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day();
  const daysInMonth = endOfMonth.date();

  const prevMonth = () => {
    let prev = currentDate.subtract(1, "month");
    while (blockedMonths.includes(prev.month())) {
      prev = prev.subtract(1, "month");
    }
    setCurrentDate(prev);
  };

  const nextMonth = () => {
    let next = currentDate.add(1, "month");

    // Keep skipping while next is in blocked list or after current month
    while (
      blockedMonths.includes(next.month()) ||
      next.isAfter(dayjs(), "month")
    ) {
      next = next.add(1, "month");
    }

    // Only set if next is within bounds
    if (next.isSameOrBefore(dayjs(), "month")) {
      setCurrentDate(next);
    }
  };

  const renderDays = () => {
    const cells = [];
    for (let i = 0; i < startDay; i++) {
      cells.push(<div key={`pad-${i}`} className="aspect-square" />);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const shift = shifts[d];
      cells.push(
        <div
          key={d}
          className={`flex aspect-square flex-col items-center justify-start rounded-xl px-2 py-3 text-white transition ${
            shift ? shift.color : "bg-white/5 hover:bg-white/10"
          }`}
        >
          <div className="mb-1 text-sm font-semibold">{d}</div>
          {shift && (
            <div className="hidden w-full text-center text-[10px] leading-tight font-bold sm:text-xs md:block">
              {shift.label}
              <div className="text-[9px]">{shift.hours}</div>
            </div>
          )}
        </div>,
      );
    }
    return cells;
  };

  const renderWeek = () => {
    const weekStart = currentDate.startOf("week");
    return Array.from({ length: 7 }, (_, i) => {
      const date = weekStart.add(i, "day");
      const day = date.date();
      const isToday = date.isSame(dayjs(), "day");
      const shift = shifts[day];

      return (
        <div
          key={day}
          className={classNames(
            "flex w-full items-center justify-between gap-4 rounded-xl border border-white/10 p-3 transition-all",
            {
              "bg-white/10": isToday,
              "bg-white/5 hover:bg-white/10": !isToday,
            },
          )}
        >
          <div className="min-w-[40px] text-sm font-semibold">
            {date.format("ddd D")}
          </div>
          {shift ? (
            <div
              className={`flex-1 rounded-md px-3 py-2 ${shift.color} flex flex-col gap-1 text-sm text-white sm:flex-row sm:items-center sm:justify-between`}
            >
              <div className="font-semibold">{shift.label}</div>
              <div className="text-xs">{shift.time}</div>
              <div className="text-xs">{shift.hours}</div>
            </div>
          ) : (
            <div className="flex-1 text-sm text-white/40 italic">
              No shift assigned
            </div>
          )}
        </div>
      );
    });
  };  

  return (
    <section className="relative flex h-fit w-full items-center pt-10 md:pt-16 justify-center overflow-hidden  ">
      {/* Blobs */}
      <div className="absolute -top-40 -left-40 h-[350px] w-[350px] animate-pulse rounded-full bg-[#3795FF] opacity-30 blur-3xl" />
      <div className="absolute right-[-60px] bottom-[25px] h-[250px] w-[250px] animate-pulse rounded-full bg-[#00D38A] opacity-25 blur-2xl delay-100" />
      
      <div className="absolute top-32 right-24 h-[200px]  w-[200px] animate-pulse rounded-full bg-gradient-to-br from-[#00D38A] to-[#3F8EFC] opacity-40 blur-2xl" />

      <div className="relative z-10 flex w-full flex-col items-center gap-12 rounded-3xl  md:flex-row md:px-20">
        {/* Left */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-4 text-5xl leading-tight font-extrabold  text-white md:text-7xl">
            Smarter Scheduling <span className="text-blue-400">.</span>{" "}
            <span className="text-[#0eeeab]">Happier Teams</span>
          </h1>
          <p className="mb-8 text-lg text-black md:text-xl">
            AI-powered. Preference-aware. Always on time.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
           <Link href="/signup">
            <button className="cursor-pointer rounded-full bg-gradient-to-r from-[#00D38A] to-[#3F8EFC] px-6 py-3 text-lg font-semibold text-white transition hover:scale-105">
              Start using YouShift
            </button>
          </Link>
          </div>
        </div>

        {/* Right - Calendar */}
        <div className="h-[80vh] w-[90%] md:max-w-2xl flex-1 rounded-2xl border border-white/10 bg-[#111827] p-6 text-white shadow-xl backdrop-blur-md">
          <div className="mb-2 flex items-center justify-between">
            <button
              onClick={prevMonth}
              className="text-white/70 hover:text-white"
            >
              &lt;
            </button>
            <div className="text-lg font-semibold">
              {currentDate.format("MMMM YYYY")}
            </div>
            <button
              onClick={nextMonth}
              disabled={currentDate
                .startOf("month")
                .isSame(today.startOf("month"))}
              className="text-white/70 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              &gt;
            </button>
          </div>

          <div className="mb-4 flex justify-center gap-4 text-sm text-white/60">
            <button
              className={classNames("cursor-pointer px-2", {
                "font-semibold text-white underline": viewMode === "week",
              })}
              onClick={() => setViewMode("week")}
            >
              Week view
            </button>
            <button
              className={classNames("cursor-pointer px-2", {
                "font-semibold text-white underline": viewMode === "month",
              })}
              onClick={() => setViewMode("month")}
            >
              Month view
            </button>
          </div>

          <div className="mb-2 grid grid-cols-7 gap-1 text-center text-sm font-medium text-white/60">
            {days.map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {viewMode === "month" ? (
            <div className="grid min-h-[350px] grid-cols-7 gap-2 text-xs sm:min-h-[250px] sm:text-sm">
              {renderDays()}
            </div>
          ) : (
            <div className="flex flex-col gap-2">{renderWeek()}</div>
          )}

          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-white/70">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-blue-600" /> ER
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-purple-500" /> Clinic
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-600" /> ICU
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-fuchsia-500" /> Surg
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-cyan-700" /> Urgent
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
