


'use client';

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";


import React from 'react'
import { features } from 'constants/constant';

const Features = () => {
  return (
    <section className="bg-none py-20 px-6 md:px-12 relative overflow-hidden">
      {/* <div className="absolute right-[-60px] bottom-[-60px] h-[250px] w-[250px] animate-pulse rounded-full bg-[#00D38A] opacity-25 blur-2xl delay-100" /> */}
      {/* <div className="absolute left-[-80px] bottom-[-100px] h-[250px] w-[250px] animate-pulse rounded-full bg-[#00D38A] opacity-25 blur-2xl delay-100" /> */}
      <div className="absolute top-[500px] right-0 h-[200px] w-[200px] animate-pulse rounded-full bg-gradient-to-br from-[#00D38A] to-[#3F8EFC] opacity-40 blur-2xl" />
      <div className="absolute top-[200px] left-0 h-[200px] w-[200px] animate-pulse rounded-full bg-gradient-to-br from-[#00D38A] to-[#3F8EFC] opacity-40 blur-2xl" />
      <div className="absolute top-[800px] left-0 h-[200px] w-[200px] animate-pulse rounded-full bg-gradient-to-br from-[#00D38A] to-[#3F8EFC] opacity-40 blur-2xl" />
  <div className="max-w-7xl relative mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
      Powerful Features. Designed for You.
    </h2>
    <p className="text-gray-600 text-lg md:text-xl mb-12">
      Everything you need to automate shift planning and streamline your team's workflow.
    </p>

    <div className=" ">
          <BentoGrid className="max-w-7xl mx-auto">
      {features.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={<item.icon />}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  </div>
</section>  

  )
}

export default Features





