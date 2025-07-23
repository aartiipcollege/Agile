"use client";

import Image from "next/image";

const WhatWeDoSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h3 className="text-[#E32222] text-base sm:text-lg font-semibold mb-3">What We Do?</h3>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
            The Service We Offer Is Specifically Designed To Meet{" "}
            <span className="text-white font-extrabold">Your Needs.</span>
          </h2>
          <p className="text-gray-300 mb-8 text-sm sm:text-base">
            Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla tincidunt
            laoreet. Morbi ac metus vitae diam scelerisque malesuada eget eu mauris. Cras
            varius lorem ac velit pharetra.
          </p>
          <button className="bg-[#E32222] hover:bg-red-700 transition text-white font-semibold py-3 px-6 rounded-md inline-flex items-center gap-2">
            Read More
            <span className="text-lg font-bold">»</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full h-40 sm:h-48 lg:h-44 xl:h-52">
            <Image
              src="/images/team1.avif"
              alt="Team working"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="relative w-full h-40 sm:h-48 lg:h-44 xl:h-52">
            <Image
              src="/images/whiteboard.avif"
              alt="Whiteboard session"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="relative w-full h-40 sm:h-48 lg:h-44 xl:h-52">
            <Image
              src="/images/discussion.avif"
              alt="Team discussion"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="relative w-full h-40 sm:h-48 lg:h-44 xl:h-52">
            <Image
              src="/images/interview.avif"
              alt="Interview meeting"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
