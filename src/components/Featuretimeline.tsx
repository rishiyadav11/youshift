import React from "react";
import { Timeline } from "./ui/timeline";

const Featuretimeline = () => {
  const data = [
    {
      title: "One-click shift assignment",
      content: (
        <div>
          <p className="mb-4 text-sm text-center  text-blue-900 md:text-lg font-bold ">Let our algorithm do the heavy lifting
          </p>
          <div className="grid grid-cols-1 ">
           <video muted autoPlay loop src="https://prod-docs.you-shift.com/landing_videos/algorithm_en.mp4"/>
          </div>
          <p className="mb-8 text-sm  text-neutral-800 md:text-sm mt-5  ">Generate a fully compliant, preference-driven schedule in seconds. With a single click, our advanced algorithm considers every rule and personal request, delivering a perfectly balanced calendar—and saving you a mountain of manual work.


          </p>
        </div>
      ),
    },
      {
      title: "Preference-based assignments",
      content: (
        <div>
          <p className="mb-4 text-sm text-center  text-blue-900 md:text-lg font-bold ">Empower your team with choice

          </p>
          <div className="grid grid-cols-1 ">
           <video muted autoPlay loop src="https://prod-docs.you-shift.com/landing_videos/preferences_en.mp4"/>
          </div>
          <p className="mb-8 text-sm  text-neutral-800 md:text-sm mt-5  ">Enhance work-life balance by letting your staff indicate preferred shifts, days off, or reduced availability. We factor in these preferences through a points system, ensuring everyone feels valued while still meeting operational needs.

          </p>
        </div>
      ),
    },
      {
      title: "Streamlined manual editing",
      content: (
        <div>
          <p className="mb-4 text-sm text-center  text-blue-900 md:text-lg font-bold ">Own your schedule while we handle the math
          </p>
          <div className="grid grid-cols-1 ">
           <video muted autoPlay loop src="https://prod-docs.you-shift.com/landing_videos/manual_editing_en.mp4"/>
          </div>
          <p className="mb-8 text-sm  text-neutral-800 md:text-sm mt-5  ">Prefer a hands-on approach? No problem. Our intelligent manual assignment tool comes packed with real-time checks and guidance that flag any rule violations. Allocate shifts with confidence, knowing our system keeps you on track with both rules and preferences.

          </p>
        </div>
      ),
    },
      {
      title: "Custom Scheduling Rules",
      content: (
        <div>
          <p className="mb-4 text-sm text-center  text-blue-900 md:text-lg font-bold ">Build the perfect schedule for any requirement

          </p>
          <div className="grid grid-cols-1 ">
           <video muted autoPlay loop src="https://prod-docs.you-shift.com/landing_videos/reqs_en.mp4"/>
          </div>
          <p className="mb-8 text-sm  text-neutral-800 md:text-sm mt-5  ">Create and enforce your own scheduling rules with ease—whether it's max working hours, mandatory rest times, or specialized shifts. Our flexible system lets you adapt to any legal or contractual requirement, no matter how unique.
          </p>
        </div>
      ),
    },
      {
      title: "All-in-one time off management",
      content: (
        <div>
          <p className="mb-4 text-sm text-center  text-blue-900 md:text-lg font-bold ">Vacation and conferences made easy
          </p>
          <div className="grid grid-cols-1 ">
           <video muted autoPlay loop src="https://prod-docs.you-shift.com/landing_videos/events_center_en.mp4"/>
          </div>
          <p className="mb-8 text-sm  text-neutral-800 md:text-sm mt-5  ">Handle every absence seamlessly—from planned vacations to last-minute conference trips. Requests and approvals happen in-app, so everyone stays informed about who's out and when. No more guesswork or double-booking.

          </p>
        </div>
      ),
    },
      {
      title: "Effortless shift swaps",
      content: (
        <div>
          <p className="mb-4 text-sm text-center  text-blue-900 md:text-lg font-bold ">Stay up to date with one source of truth
          </p>
          <div className="grid grid-cols-1 ">
           <video muted autoPlay loop src="https://prod-docs.you-shift.com/landing_videos/exchange_en.mp4"/>
          </div>
          <p className="mb-8 text-sm  text-neutral-800 md:text-sm mt-5  ">Let team members trade schedules directly in the platform—real-time updates keep everyone on the same page. Your workforce stays flexible while you maintain full visibility.


          </p>
        </div>
      ),
    },
      {
      title: "Data-driven insights",
      content: (
        <div>
          <p className="mb-4 text-sm text-center  text-blue-900 md:text-lg font-bold ">Track hours, balance workloads, boost morale
          </p>
          <div className="grid grid-cols-1 ">
           <video muted autoPlay loop src="https://prod-docs.you-shift.com/landing_videos/stats_en.mp4"/>
          </div>
          <p className="mb-8 text-sm  text-neutral-800 md:text-sm mt-5  ">Get a comprehensive view of who's working when, where, and how much. With powerful analytics, you can customize overtime calculations, compare workloads, and ensure no one is overworked. Empower fair, transparent scheduling.


          </p>
        </div>
      ),
    },
    

  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}


export default Featuretimeline;