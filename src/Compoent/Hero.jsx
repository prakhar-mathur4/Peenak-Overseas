import React from "react";
import HeroCrousel from "./HeroCrousel";

const Hero = () => {
  return (
    <div id="about" className="pt-5 md:pt-20 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
        {/* Left Side text */}
        <div className="flex flex-col text-left text-xl pt-16">
          <p className="pb-3 text-4xl">Welcome to</p>
          <span className="font-bold text-6xl text-main-light">
            Peeank Overseas
          </span>
          <p className="pt-3 text-justify">
            Since being established in 2018, PEENAK OVERSEAS has been known for
            an unparalleled commitment to customer satisfaction. Offering a full
            range of high-efficiency disinfectant. We provide medical device
            sterilization chemical, high-level disinfection products, gas
            fumigation sachets.
          </p>
        </div>
        {/* Right Side Image  */}
        <div className="object-cover md:h-auto">
          <figure className="w-full h-48 md:h-auto md:w-full ">
            <HeroCrousel />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Hero;
