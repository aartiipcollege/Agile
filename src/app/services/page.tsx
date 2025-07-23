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
      <Breadcrumb
        pageName="Services Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <WhatWeDoSection />
      <Feature />
      <WhyChooseUsSection />
    </>
  );
};

export default ServicesPage;
