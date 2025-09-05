"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../Common/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function FAQPage() {
  const boxesRef = useRef([]);

  useEffect(() => {
    boxesRef.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const questions = [
    "Lorem Ipsum Dummy?",
    "Dummy the printing typesetting industry?",
    "Lorem Ipsum Dummy?",
    "Dummy the printing typesetting industry?",
    "Lorem Ipsum Dummy?",
    "Lorem Ipsum Dummy?",
    "Dummy the printing typesetting industry?",
    "Dummy the printing typesetting industry?",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-black dark:text-white transition-colors duration-300">
    
        <SectionTitle
          title="FAQ"
          paragraph="Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
          center
        />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((question, index) => (
          <div
            key={index}
            ref ={(el) => (boxesRef.current[index] = el)}
            className="bg-[#f5edef] dark:bg-[#1D2430] rounded-xl px-6 py-5 flex justify-between items-center cursor-pointer hover:bg-[#e6aeb4] dark:hover:bg-[#2D333F] transition-all duration-300"
          >
            <span className="text-sm sm:text-base">{question}</span>
            <span className="text-red-500 text-xl sm:text-2xl mt-[-20px]">⌄</span>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="bg-red-500 hover:bg-red-600 transition-all text-white font-medium px-6 py-3 rounded-md text-sm sm:text-base">
          Ask More Questions
        </button>
      </div>
    </section>
  );
}
