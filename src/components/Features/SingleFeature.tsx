"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const SingleFeature = ({ icon, title, paragraph }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const el = boxRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 60%", 
          scrub: true,   
        },
      }
    );
  }, []);

  return (
    <div className="w-full" ref={boxRef}>
      <div className="text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
        <Image src={icon} width={40} height={40} alt="feature icon" />
      </div>
      <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
        {title}
      </h3>
      <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;
