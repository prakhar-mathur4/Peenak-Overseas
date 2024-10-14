import React, { useEffect, useState } from "react";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    "https://images.pexels.com/photos/7856723/pexels-photo-7856723.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4099267/pexels-photo-4099267.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3952008/pexels-photo-3952008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=600",
    // Add more image URLs as needed
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Automatically transition to the next image every 5 seconds
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="object-cover md:h-auto relative">
      <figure className="w-full h-48 md:h-auto md:w-full md:pt-10">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </figure>

      {/* <button
        className="absolute left-2 transform -translate-y-1/2"
        onClick={goToPrevious}
      >
        Previous
      </button>
      <button
        className="absolute right-2 transform -translate-y-1/2"
        onClick={goToNext}
      >
        Next
      </button> */}
    </div>
  );
};

export default HeroCarousel;
