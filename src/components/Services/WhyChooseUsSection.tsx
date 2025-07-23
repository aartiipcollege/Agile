"use client";

import Image from "next/image";
import Link from "next/link";

const WhyChooseUsSection = () => {
  return (
    <section className="relative w-full h-auto">
      {/* Background Image */}
      <div className="relative w-full h-[500px] sm:h-[600px]">
        <Image
          src="/images/why-choose-us.jpg" 
          alt="Why Choose Us"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
          <div className="text-white max-w-2xl lg:max-w-3xl text-center lg:text-left">
            <h3 className="text-[#E32222] text-lg sm:text-xl font-semibold mb-3">
              Why Choose Us
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl  leading-snug mb-6">
              Get In Touch With Us And We’ll Help 
              <span className="text-white font-extrabold"> Your Business.</span>
            </h2>
            <p className="text-gray-300 mb-8 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non ipsum soluta
              perferendis veniam qui esse magnam commodi quisquam vitae labore nemo at
              voluptatem, totam, minima recusandae assumenda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                  href="https://nextjstemplates.com/templates/saas-starter-startup"
                  className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  🔥 Get Pro
                </Link>
                <Link
                  href="https://github.com/NextJSTemplates/startup-nextjs"
                  className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Star on GitHub
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
