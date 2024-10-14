import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import data from "../Data/Product";

const ProductCousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint for small screens (sm)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, // Change slide every 3 seconds (3000 milliseconds)
  };

  return (
    <div name="products">
      <h1 className="text-4xl font-semibold underline">Feature Products</h1>
      <div className="w-3/4 m-auto shadow-md">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white h-[450px] text-black rounded-xl"
              >
                <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                  <img
                    src={d.imageUrls[0]}
                    alt=""
                    className="h-44 w-44 rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">MRP Rs.{d.price["500ML"]}/-</p>
                  <NavLink
                    to={`/products/${d.id}`}
                    className=" text-lg font-bold px-6 py-1 rounded-xl "
                    // style={{ color: "white", background: "#5393C4" }}
                  >
                    Know more
                  </NavLink>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="pt-10 font-semibold cursor-pointer">
        <NavLink to="/products">See all</NavLink>
      </div>
    </div>
  );
};

export default ProductCousel;
