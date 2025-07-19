import { Feature } from "@/types/feature";
import Image from "next/image";
const SingleFeature = ({ icon, title, paragraph }) => {
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className=" text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
           <Image src={icon} width={40} height={40} alt="feature icon" />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
