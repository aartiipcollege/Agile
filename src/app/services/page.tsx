import Breadcrumb from "@/components/Common/Breadcrumb";
import WhatWeDoSection from "@/components/Services/WhatWeDoSection";
import Feature from "@/components/Features/index";
import WhyChooseUsSection from "@/components/Services/WhyChooseUsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page | Free Next.js Template for Startup and SaaS",
  description: "This is Services Page for Startup Nextjs Template",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
   
      <WhatWeDoSection />
      <Feature />
      <WhyChooseUsSection />
    </>
  );
};

export default ServicesPage;
