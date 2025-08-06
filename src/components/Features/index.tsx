"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaRocket,
  FaMoneyBillWave,
  FaGamepad,
  FaUserAstronaut,
  FaFileAlt,
  FaCogs,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaRocket size={40} />,
    title: "Lorem Ipsum Dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy.",
  },
  {
    icon: <FaMoneyBillWave size={40} />,
    title: "Lorem Ipsum Dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy.",
  },
  {
    icon: <FaGamepad size={40} />,
    title: "Lorem Ipsum Dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy.",
  },
  {
    icon: <FaUserAstronaut size={40} />,
    title: "Lorem Ipsum Dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy.",
  },
  {
    icon: <FaFileAlt size={40} />,
    title: "Lorem Ipsum Dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy.",
  },
  {
    icon: <FaCogs size={40} />,
    title: "Lorem Ipsum Dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy.",
  },
];

export default function Features() {
  const boxesRef = useRef([]);

  useEffect(() => {
    boxesRef.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="text-white py-28 px-6 md:px-12 lg:px-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-red-500 uppercase tracking-widest font-semibold">
            Our Services
          </p>
          <h2 className="text-4xl font-bold mt-2">
            <span className="text-white">Services </span>
            <span className="font-light text-gray-300">We Provide</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (boxesRef.current[index] = el)}
              className={` group relative rounded-xl p-6 pb-12 text-center transition-all duration-300 
                bg-[#1C1C24]
                border
                border-transparent hover:border-red-500 hover:bg-gradient-to-br hover:from-red-900/20 hover:to-transparent`}
            >
              <div className="text-red-500 flex justify-center mb-4">{service.icon}</div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>

              <div
                className={`absolute left-1/2 -bottom-5 transform -translate-x-1/2 
                  bg-red-500 w-10 h-10 rounded-full flex items-center justify-center 
                  transition-opacity duration-300 
                  opacity-0 group-hover:opacity-100`}
              >
                <FiArrowRight className="text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
