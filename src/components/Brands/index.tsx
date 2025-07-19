import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const OurPartner = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap  justify-center ">
          <h3 className=" text-primary text-1xl text-center py-4">Our Partners</h3>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-xs bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex  w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-15 w-[125px] opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100 bg-black"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
