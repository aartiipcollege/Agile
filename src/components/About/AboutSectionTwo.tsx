"use client";

import Image from "next/image";
import adeLogo from "../../../public/images/about/AboutLogo.png"; // place your logo here

export default function AboutSectionTwo() {
  return (
    <section className=" text-white py-28 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="mb-8">
          <p className="text-sm text-red-500 tracking-widest font-semibold uppercase">About Us</p>
          <h2 className="text-3xl md:text-4xl font-light mt-2 leading-relaxed md:leading-snug">
            Lorem Ipsum is <span className="font-semibold">
              The Simply Dummy <br />
              <span className="text-white font-bold">
                Text of The Printing and Type Setting Industry.
              </span>
            </span>
          </h2>

        </div>

        {/* Content Row */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Circular Logo */}
          <div className="flex justify-center items-center relative mt-7">
            <Image src={adeLogo} alt="ADE Logo" width={250} height={250} />
          </div>

          {/* Right Text Content */}
          <div>
            <p className="text-m mt-7 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text <span className="text-red-500">ever since the 1500s</span>, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-400 text-m mt-10 leading-relaxed">
              When an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type and scrambled it to make a type specimen book. When an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16">
          <h3 className="text-center text-sm text-red-500 tracking-widest font-semibold mb-8 uppercase">Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#1C1C24] p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-white">$53M</h4>
              <p className="text-sm text-gray-400 mt-2">Lorem Ipsum Sit</p>
            </div>
            <div className="bg-[#1C1C24] p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-white">28M</h4>
              <p className="text-sm text-gray-400 mt-2">Dummy Text</p>
            </div>
            <div className="bg-[#1C1C24] p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-white">68,998<span className="text-red-500">+</span></h4>
              <p className="text-sm text-gray-400 mt-2">Lorem Ipsum</p>
            </div>
            <div className="bg-[#1C1C24] p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-white">120,345<span className="text-red-500">+</span></h4>
              <p className="text-sm text-gray-400 mt-2">Number of projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
